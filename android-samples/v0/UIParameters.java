package org.gitar;

import com.internal.gitar.Parameter;

public interface UIParameter {
    @Parameter(name = "old-banner")
    boolean isOldBanner();

}