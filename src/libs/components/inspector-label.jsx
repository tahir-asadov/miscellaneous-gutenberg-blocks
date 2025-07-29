import { useState } from "react";
import { desktop, tablet, mobile } from "@wordpress/icons"; // For the plus icon
import "./flexbox-inspector-label.scss";
export const InspectorLabel = ({ title, onChange, defaultValue }) => {
	const [currentVariant, setVariant] = useState(defaultValue ?? "desktop");
	const currentIcon =
		defaultValue == "desktop"
			? desktop
			: defaultValue == "tablet"
			? tablet
			: mobile;
	const variants = ["Desktop", "Tablet", "Mobile"];
	return (
		<div className="flexbox-inspector-label">
			<label className="components-base-control__label">{title}</label>
			<div className="layout-buttons-container">
				<button className="layout-button">{currentIcon}</button>
				<div className="layout-buttons">
					<div className="layout-button-variants">
						{variants.map((variant) => {
							const name = variant.toLowerCase();

							const icon =
								name == "desktop"
									? desktop
									: name == "tablet"
									? tablet
									: mobile;
							return (
								<button
									className="layout-button"
									data-selected={name == currentVariant}
									title={variant}
									onClick={() => {
										if (onChange) {
											onChange(name);
											setVariant(name);
										}
									}}
								>
									{icon}
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
