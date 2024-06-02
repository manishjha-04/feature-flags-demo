package android_app;

import org.gitar.UIParameter

class UIWindow {
  fun run() {
    if (true) {
      oldBanner()
    } else {
      newBanner();
      return;
    } 
    console.log("Old banner is displayed")
    return;
  }

  fun oldBanner() { ... }

  fun newBanner() { ... }
}