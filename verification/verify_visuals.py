from playwright.sync_api import sync_playwright
import time
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Emulate a high-res desktop
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})

        try:
            print("Navigating to home page...")
            page.goto("http://localhost:3000")
            page.wait_for_load_state("networkidle")

            # Wait for animations
            print("Waiting for animations...")
            time.sleep(3)

            print("Capturing Hero Section...")
            page.screenshot(path="verification/hero_fullwidth.png")

            # Capture Category Page (Mood Banner)
            print("Navigating to Men's Category...")
            page.goto("http://localhost:3000/shop/men")
            page.wait_for_load_state("networkidle")
            time.sleep(1)
            page.screenshot(path="verification/category_men.png")

            # Test Mobile View
            print("Testing Mobile View...")
            page.set_viewport_size({"width": 375, "height": 812})
            # Wait for resize and potential mobile-specific animations
            time.sleep(3)
            page.screenshot(path="verification/hero_mobile.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
