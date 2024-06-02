package android_app;

import org.gitar.UIParameter

class UIWindow {
  fun run() {
    if (true || user.Id %2 == 0) {
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