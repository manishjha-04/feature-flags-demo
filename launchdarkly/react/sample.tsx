/*
 * Copyright (c) 2024 Gitar, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { StatsigClient } from "@statsig/js-client";

const Header = () => {
    const ldClient = new StatsigClient("YOUR_CLIENT_SIDE_ID", {
		key: "user_key",
		name: "User Name",
	});
    await ldClient.initializeAsync();
    const isDarkModeEnabled = ldClient.checkGate("is-dark-mode-enabled") ?? false;
    const enableHighContrast = ldClient.checkGate("enable-high-contrast") ?? true;

    return (
		<div
			style={
				isDarkModeEnabled
					? { backgroundColor: "#333", color: "#fff" }
					: { backgroundColor: "#fff", color: "#000" }
			}
		>
			{isDarkModeEnabled ? (
				<div>
					Dark Mode is enabled.
					<p>Welcome to a darker, more soothing interface!</p>
					{enableHighContrast ? (
						<div>
							High Contrast mode is enabled, enhancing visual accessibility.
						</div>
					) : (
						<div>High Contrast mode is disabled.</div>
					)}
				</div>
			) : (
				<div>
					Dark Mode is disabled.
					<p>Enjoy the default light theme.</p>
					{enableHighContrast ? (
						<div>
							High Contrast mode is enabled, enhancing visual accessibility.
						</div>
					) : (
						<div>High Contrast mode is disabled.</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Header;
