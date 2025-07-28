/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import {
	ResizableBox,
	PanelBody,
	PanelRow,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from "@wordpress/components";
import { Button } from "@wordpress/components";
// import {
// 	row, stack, keyboardReturn,
// 	justifyCenter, justifyLeft, justifyRight, justifySpaceBetween, justifyStretch,
// 	alignLeft,
// 	alignCenter,
// 	alignRight,
// 	paragraph,
// 	formatBold,
// 	formatItalic,
// 	link
// } from '@wordpress/icons';
import {
	plus,
	check,
	desktop,
	tablet,
	mobile,
	button,
	justifyCenter,
	justifyLeft,
	justifyRight,
	justifySpaceBetween,
	justifyStretch,
	alignLeft,
	alignCenter,
	alignRight,
} from "@wordpress/icons"; // For the plus icon
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InnerBlocks,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import {
	AlignVerticalJustifyEnd,
	AlignVerticalJustifyStart,
	AlignVerticalJustifyCenter,
	AlignVerticalDistributeCenter,
	AlignVerticalSpaceBetween,
	AlignStartVertical,
	AlignEndVertical,
	AlignHorizontalJustifyCenter,
	AlignHorizontalSpaceBetween,
	AlignHorizontalSpaceAround,
	Ban,
} from "lucide-react";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { useEffect, useState, useRef } from "react";
import { InspectorLabel } from "../libs/global";

import { useDispatch } from "@wordpress/data";
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
const MyCustomAppender = ({ clientId }) => {
	return <InnerBlocks.ButtonBlockAppender rootClientId={clientId} />;
};

// const Label = ({ title, onChange, defaultValue }) => {
// 	const [currentVariant, setVariant] = useState(defaultValue ?? "desktop");
// 	const currentIcon =
// 		currentVariant == "desktop"
// 			? desktop
// 			: currentVariant == "tablet"
// 			? tablet
// 			: mobile;
// 	const variants = ["Desktop", "Tablet", "Mobile"];
// 	return (
// 		<div className="flexbox-inspector-label">
// 			<label className="components-base-control__label">{title}</label>
// 			<div className="layout-buttons-container">
// 				<button className="layout-button">{currentIcon}</button>
// 				<div className="layout-buttons">
// 					<div className="layout-button-variants">
// 						{variants.map((variant) => {
// 							const name = variant.toLowerCase();

// 							const icon =
// 								name == "desktop"
// 									? desktop
// 									: name == "tablet"
// 									? tablet
// 									: mobile;
// 							return (
// 								<button
// 									className="layout-button"
// 									data-selected={name == currentVariant}
// 									title={variant}
// 									onClick={() => {
// 										if (onChange) {
// 											onChange(name);
// 											setVariant(name);
// 										}
// 									}}
// 								>
// 									{icon}
// 								</button>
// 							);
// 						})}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

function generateTemplate(number) {
	const innerBlocksAttributes = {
		width: 100 / number,
		tablet_width: 50,
		mobile_width: 100,
	};
	const templates = [];
	for (let index = 0; index < number; index++) {
		templates.push(["flexbox/flexchild", innerBlocksAttributes]);
	}
	return templates;
}

export default function Edit(props) {
	const [layout, setLayout] = useState("desktop");
	const [parentWidth, setParentWidth] = useState(0);
	const { __experimentalSetPreviewDeviceType } = useDispatch("core/edit-post");

	const alignItemsStartIcon = <AlignVerticalJustifyStart width={17} />;
	const alignItemsEndIcon = <AlignVerticalJustifyEnd width={17} />;
	const alignItemsCenterIcon = <AlignVerticalJustifyCenter width={17} />;
	const alignItemsBaselineIcon = <AlignVerticalDistributeCenter width={17} />;
	const alignItemsStretchIcon = <AlignVerticalSpaceBetween width={17} />;
	const alignItemsNoneIcon = <Ban width={17} />;
	const AlignStartVerticalIcon = <AlignStartVertical width={17} />;
	const AlignEndVerticalIcon = <AlignEndVertical width={17} />;
	const AlignHorizontalJustifyCenterIcon = (
		<AlignHorizontalJustifyCenter width={17} />
	);
	const AlignHorizontalSpaceBetweenIcon = (
		<AlignHorizontalSpaceBetween width={17} />
	);
	const AlignHorizontalSpaceAroundIcon = (
		<AlignHorizontalSpaceAround width={17} />
	);

	// const parentRef = useRef();
	// const measureWidth = () => {
	// 	console.log("measureWidth");

	// 	if (parentRef.current) {
	// 		console.log(
	// 			"parentRef.current.offsetWidth",
	// 			parentRef.current.offsetWidth,
	// 		);

	// 		// This gives you the client width of the block's outer container
	// 		setParentWidth(parentRef.current.offsetWidth);
	// 	} else {
	// 		console.log("asdno");
	// 	}
	// };
	// useEffect(() => {
	// 	// Measure initial width
	// 	// measureWidth();

	// 	// Re-measure on window resize
	// 	// window.addEventListener("resize", measureWidth);

	// 	// Clean up event listener
	// 	return () => {
	// 		window.removeEventListener("resize", measureWidth);
	// 	};
	// }, []);
	const blockProps = useBlockProps();
	const {
		attributes: {
			width,
			column,
			wrap,
			tablet_wrap,
			mobile_wrap,
			horizontal,
			tablet_horizontal,
			mobile_horizontal,
			reverse,
			tablet_reverse,
			mobile_reverse,
			justify_content,
			tablet_justify_content,
			mobile_justify_content,
			align_items,
			tablet_align_items,
			mobile_align_items,
		},
		setAttributes,
		toggleSelection,
	} = props;

	const innerBlocksProps =
		column != 0
			? useInnerBlocksProps(blockProps, {
					allowedBlocks: ["flexbox/flexchild"],
					template: generateTemplate(column),
					templateLock: false,
			  })
			: useInnerBlocksProps(blockProps);
	return (
		<>
			<InspectorControls>
				<PanelBody title="Settings">
					<InspectorLabel
						title="Wrap"
						defaultValue={layout}
						onChange={(value) => {
							setLayout(value);
							__experimentalSetPreviewDeviceType(
								value == "desktop"
									? "Desktop"
									: value == "tablet"
									? "Tablet"
									: "Mobile",
							);
						}}
					/>
					{layout == "desktop" ? (
						<ToggleGroupControl
							value={wrap}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ wrap: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Wrap"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="No Wrap"
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tablet_wrap}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tablet_wrap: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Wrap"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="No Wrap"
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobile_wrap}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobile_wrap: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Wrap"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="No Wrap"
							/>
						</ToggleGroupControl>
					)}
					<InspectorLabel
						title="Direction"
						defaultValue={layout}
						onChange={(value) => {
							setLayout(value);
							__experimentalSetPreviewDeviceType(
								value == "desktop"
									? "Desktop"
									: value == "tablet"
									? "Tablet"
									: "Mobile",
							);
						}}
					/>
					{layout == "desktop" ? (
						<ToggleGroupControl
							value={horizontal}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ horizontal: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Horizontal"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Vertical"
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tablet_horizontal}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tablet_horizontal: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Horizontal"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Vertical"
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobile_horizontal}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobile_horizontal: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Horizontal"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Vertical"
							/>
						</ToggleGroupControl>
					)}
					<InspectorLabel
						title="Reverse"
						defaultValue={layout}
						onChange={(value) => {
							setLayout(value);
							__experimentalSetPreviewDeviceType(
								value == "desktop"
									? "Desktop"
									: value == "tablet"
									? "Tablet"
									: "Mobile",
							);
						}}
					/>
					{layout == "desktop" ? (
						<ToggleGroupControl
							value={reverse}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ reverse: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Enabled"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Disabled"
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tablet_reverse}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tablet_reverse: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Enabled"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Disabled"
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobile_reverse}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobile_reverse: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Enabled"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Disabled"
							/>
						</ToggleGroupControl>
					)}
					<InspectorLabel
						title="Justify Content"
						defaultValue={layout}
						onChange={(value) => {
							setLayout(value);
							__experimentalSetPreviewDeviceType(
								value == "desktop"
									? "Desktop"
									: value == "tablet"
									? "Tablet"
									: "Mobile",
							);
						}}
					/>
					{layout == "desktop" ? (
						<ToggleGroupControl
							value={justify_content}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ justify_content: value })}
						>
							<ToggleGroupControlOptionIcon
								icon={AlignStartVerticalIcon}
								value="flex-start"
								label="Flex start"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignEndVerticalIcon}
								value="flex-end"
								label="Flex end"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalJustifyCenterIcon}
								value="center"
								label="Center"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceBetweenIcon}
								value="between"
								label="Space Between"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceAroundIcon}
								value="stretch"
								label="Space Around"
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tablet_justify_content}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) =>
								setAttributes({ tablet_justify_content: value })
							}
						>
							<ToggleGroupControlOptionIcon
								icon={AlignStartVerticalIcon}
								value="flex-start"
								label="Flex start"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignEndVerticalIcon}
								value="flex-end"
								label="Flex end"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalJustifyCenterIcon}
								value="center"
								label="Center"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceBetweenIcon}
								value="between"
								label="Space Between"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceAroundIcon}
								value="stretch"
								label="Space Around"
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobile_justify_content}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) =>
								setAttributes({ mobile_justify_content: value })
							}
						>
							<ToggleGroupControlOptionIcon
								icon={AlignStartVerticalIcon}
								value="flex-start"
								label="Flex start"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignEndVerticalIcon}
								value="flex-end"
								label="Flex end"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalJustifyCenterIcon}
								value="center"
								label="Center"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceBetweenIcon}
								value="between"
								label="Space Between"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceAroundIcon}
								value="stretch"
								label="Space Around"
							/>
						</ToggleGroupControl>
					)}
					<InspectorLabel
						title="Align items"
						defaultValue={layout}
						onChange={(value) => {
							setLayout(value);
							__experimentalSetPreviewDeviceType(
								value == "desktop"
									? "Desktop"
									: value == "tablet"
									? "Tablet"
									: "Mobile",
							);
						}}
					/>
					<ToggleGroupControl
						value={align_items}
						isBlock={true}
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						onChange={(value) => setAttributes({ align_items: value })}
					>
						<ToggleGroupControlOptionIcon
							icon={alignItemsStartIcon}
							value="flex-start"
							label="Flex start"
						/>
						<ToggleGroupControlOptionIcon
							icon={alignItemsEndIcon}
							value="flex-end"
							label="Flex end"
						/>
						<ToggleGroupControlOptionIcon
							icon={alignItemsCenterIcon}
							value="center"
							label="Center"
						/>
						<ToggleGroupControlOptionIcon
							icon={alignItemsBaselineIcon}
							value="baseline"
							label="Baseline"
						/>
						<ToggleGroupControlOptionIcon
							icon={alignItemsStretchIcon}
							value="stretch"
							label="Stretch"
						/>
						<ToggleGroupControlOptionIcon
							icon={alignItemsNoneIcon}
							value="none"
							label="None"
						/>
					</ToggleGroupControl>
				</PanelBody>
			</InspectorControls>
			{column == 0 ? (
				<div class="">
					Columns
					<div>
						<div
							onClick={() => {
								setAttributes({ column: 1 });
							}}
						>
							1
						</div>
						<div
							onClick={() => {
								setAttributes({ column: 2 });
							}}
						>
							2
						</div>
						<div
							onClick={() => {
								setAttributes({ column: 3 });
							}}
						>
							3
						</div>
						<div
							onClick={() => {
								setAttributes({ column: 4 });
							}}
						>
							4
						</div>
						<div
							onClick={() => {
								setAttributes({ column: 5 });
							}}
						>
							5
						</div>
					</div>
				</div>
			) : null}
			<div
				className="flexbox-flexbox"
				{...innerBlocksProps}
				// ref={parentRef}
			></div>
		</>
	);
}
