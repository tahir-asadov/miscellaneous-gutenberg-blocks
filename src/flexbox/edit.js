/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { select, subscribe, useDispatch, useSelect } from "@wordpress/data";
import {
	PanelBody,
	RangeControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalUnitControl as UnitControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	SelectControl,
} from "@wordpress/components"; // For the plus icon
import {
	useBlockProps,
	InnerBlocks,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import "./editor.scss";

/**
 * External dependencies
 */
import { useState } from "react";
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
 * Internal dependencies
 */
import { InspectorLabel } from "../libs/components/inspector-label";
import { gapUnits } from "../libs/global";

/**
 * Block edit function
 */
export default function Edit(props) {
	const {
		attributes: {
			wrap,
			tabletWrap,
			mobileWrap,
			horizontal,
			tabletHorizontal,
			mobileHorizontal,
			reverse,
			tabletReverse,
			mobileReverse,
			columnGap,
			tabletColumnGap,
			mobileColumnGap,
			columnGapUnit,
			tabletColumnGapUnit,
			mobileColumnGapUnit,
			rowGap,
			tabletRowGap,
			mobileRowGap,
			rowGapUnit,
			tabletRowGapUnit,
			mobileRowGapUnit,
			justifyContent,
			tabletJustifyContent,
			mobileJustifyContent,
			alignItems,
			tabletAlignItems,
			mobileAlignItems,
			width,
			tabletWidth,
			mobileWidth,
			widthUnit,
			tabletWidthUnit,
			mobileWidthUnit,
			grow,
			tabletGrow,
			mobileGrow,
			shrink,
			tabletShrink,
			mobileShrink,
			hidden,
			tabletHidden,
			mobileHidden,
		},
		setAttributes,
	} = props;
	let previousDeviceType = select("core/editor").getDeviceType();
	subscribe(() => {
		const newDeviceType = select("core/editor").getDeviceType();

		if (newDeviceType !== previousDeviceType) {
			setLayout(newDeviceType?.toLowerCase());
			previousDeviceType = newDeviceType;
		}
	});

	const [layout, setLayout] = useState("desktop");
	let __experimentalSetPreviewDeviceType = (device) => {};
	const siteEditor = useDispatch("core/edit-site");
	if (siteEditor) {
		__experimentalSetPreviewDeviceType =
			siteEditor.__experimentalSetPreviewDeviceType;
	}
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

	const classNames = [];

	if (wrap) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--wrap");
	}

	if (tabletWrap) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--tablet-wrap");
	}

	if (mobileWrap) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--mobile-wrap");
	}

	if (horizontal) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--horizontal");
	} else {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--vertical");
	}

	if (tabletHorizontal) {
		classNames.push(
			"miscellaneous-gutenberg-blocks-flexbox--tablet-horizontal",
		);
	} else {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--tablet-vertical");
	}

	if (mobileHorizontal) {
		classNames.push(
			"miscellaneous-gutenberg-blocks-flexbox--mobile-horizontal",
		);
	} else {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--mobile-vertical");
	}

	if (reverse) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--reverse");
	}
	if (tabletReverse) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--tablet-reverse");
	}
	if (mobileReverse) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--mobile-reverse");
	}
	classNames.push(
		`miscellaneous-gutenberg-blocks-flexbox--justify-${justifyContent}`,
	);
	classNames.push(
		`miscellaneous-gutenberg-blocks-flexbox--justify-tablet-${tabletJustifyContent}`,
	);
	classNames.push(
		`miscellaneous-gutenberg-blocks-flexbox--justify-mobile-${mobileJustifyContent}`,
	);
	classNames.push(
		`miscellaneous-gutenberg-blocks-flexbox--align-${alignItems}`,
	);
	classNames.push(
		`miscellaneous-gutenberg-blocks-flexbox--align-tablet-${tabletAlignItems}`,
	);
	classNames.push(
		`miscellaneous-gutenberg-blocks-flexbox--align-mobile-${mobileAlignItems}`,
	);

	if (grow) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--grow");
	}
	if (tabletGrow) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--tablet-grow");
	}
	if (mobileGrow) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--mobile-grow");
	}
	if (shrink) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--shrink");
	}
	if (tabletShrink) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--tablet-shrink");
	}
	if (mobileShrink) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--mobile-shrink");
	}
	if (hidden) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--hidden");
	}
	if (tabletHidden) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--tablet-hidden");
	}
	if (mobileHidden) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--mobile-hidden");
	}
	const blockProps = useBlockProps({
		className: classNames.join(" "),
		style: {
			width: `${
				layout == "desktop"
					? width > 0
						? `${width}${widthUnit}`
						: "initial"
					: layout == "tablet"
					? tabletWidth > 0
						? `${tabletWidth}${tabletWidthUnit}`
						: "initial"
					: mobileWidth > 0
					? `${mobileWidth}${mobileWidthUnit}`
					: "initial"
			}`,
			columnGap: `${
				layout == "desktop"
					? columnGap > 0
						? `${columnGap}${columnGapUnit}`
						: "initial"
					: layout == "tablet"
					? tabletColumnGap > 0
						? `${tabletColumnGap}${tabletColumnGapUnit}`
						: "initial"
					: mobileColumnGap > 0
					? `${mobileColumnGap}${mobileColumnGapUnit}`
					: "initial"
			}`,
			rowGap: `${
				layout == "desktop"
					? rowGap > 0
						? `${rowGap}${rowGapUnit}`
						: "initial"
					: layout == "tablet"
					? tabletRowGap > 0
						? `${tabletRowGap}${tabletRowGapUnit}`
						: "initial"
					: mobileRowGap > 0
					? `${mobileRowGap}${mobileRowGapUnit}`
					: "initial"
			}`,
		},
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "miscellaneous-gutenberg-blocks")}>
					<InspectorLabel
						title={__("Width", "miscellaneous-gutenberg-blocks")}
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
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
								<RangeControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									value={width}
									label={null}
									onChange={(value) =>
										setAttributes({
											width: value,
										})
									}
									min={0}
									max={500}
								/>
							</div>
							<SelectControl
								label=""
								value={widthUnit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										widthUnit: value,
									});
								}}
							/>
						</div>
					) : layout == "tablet" ? (
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
								<RangeControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									value={tabletWidth}
									label={null}
									onChange={(value) =>
										setAttributes({
											tabletWidth: value,
										})
									}
									min={0}
								/>
							</div>
							<SelectControl
								label=""
								value={tabletWidthUnit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										tabletWidthUnit: value,
									});
								}}
							/>
						</div>
					) : (
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
								<RangeControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									value={mobileWidth}
									label={null}
									onChange={(value) =>
										setAttributes({
											mobileWidth: value,
										})
									}
									min={0}
								/>
							</div>
							<SelectControl
								label=""
								value={mobileWidthUnit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										mobileWidthUnit: value,
									});
								}}
							/>
						</div>
					)}
					<InspectorLabel
						title={__("Wrap", "miscellaneous-gutenberg-blocks")}
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
								label={__("Wrap", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("No Wrap", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tabletWrap}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tabletWrap: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label={__("Wrap", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("No Wrap", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobileWrap}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobileWrap: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label={__("Wrap", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("No Wrap", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					)}
					<InspectorLabel
						title={__("Direction", "miscellaneous-gutenberg-blocks")}
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
								label={__("Horizontal", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("Vertical", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tabletHorizontal}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tabletHorizontal: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label={__("Horizontal", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("Vertical", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobileHorizontal}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobileHorizontal: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label={__("Horizontal", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("Vertical", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					)}
					<InspectorLabel
						title={__("Reverse", "miscellaneous-gutenberg-blocks")}
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
								label={__("Enabled", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("Disabled", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tabletReverse}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tabletReverse: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label={__("Enabled", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("Disabled", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobileReverse}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobileReverse: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label={__("Enabled", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("Disabled", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					)}

					<InspectorLabel
						title={__("Column Gap", "miscellaneous-gutenberg-blocks")}
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
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
								<RangeControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									value={columnGap}
									label={null}
									RangeControl
									onChange={(value) =>
										setAttributes({
											columnGap: value,
										})
									}
									min={0}
									max={100}
								/>
							</div>
							<SelectControl
								label=""
								value={columnGapUnit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										columnGapUnit: value,
									});
								}}
							/>
						</div>
					) : layout == "tablet" ? (
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
								<RangeControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									value={tabletColumnGap}
									label={null}
									onChange={(value) => {
										setAttributes({
											tabletColumnGap: value,
										});
									}}
									min={0}
									max={100}
								/>
							</div>
							<SelectControl
								label=""
								value={tabletColumnGapUnit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										tabletColumnGapUnit: value,
									});
								}}
							/>
						</div>
					) : (
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
								<RangeControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									value={mobileColumnGap}
									label={null}
									onChange={(value) =>
										setAttributes({
											mobileColumnGap: value,
										})
									}
									min={0}
									max={100}
								/>
							</div>
							<SelectControl
								label=""
								value={mobileColumnGapUnit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										mobileColumnGapUnit: value,
									});
								}}
							/>
						</div>
					)}
					<InspectorLabel
						title={__("Row Gap", "miscellaneous-gutenberg-blocks")}
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
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
								<RangeControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									value={rowGap}
									label={null}
									onChange={(value) => {
										setAttributes({
											rowGap: value,
										});
									}}
									min={0}
									max={100}
								/>
							</div>
							<SelectControl
								label=""
								value={rowGapUnit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										rowGapUnit: value,
									});
								}}
							/>
						</div>
					) : layout == "tablet" ? (
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
								<RangeControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									value={tabletRowGap}
									label={null}
									onChange={(value) => {
										setAttributes({
											tabletRowGap: value,
										});
									}}
									min={0}
									max={100}
								/>
							</div>
							<SelectControl
								label=""
								value={tabletRowGapUnit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										tabletRowGapUnit: value,
									});
								}}
							/>
						</div>
					) : (
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
								<RangeControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									value={mobileRowGap}
									label={null}
									onChange={(value) => {
										setAttributes({
											mobileRowGap: value,
										});
									}}
									min={0}
									max={100}
								/>
							</div>
							<SelectControl
								label=""
								value={mobileRowGapUnit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										mobileRowGapUnit: value,
									});
								}}
							/>
						</div>
					)}
					<InspectorLabel
						title={__("Justify Content", "miscellaneous-gutenberg-blocks")}
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
							value={justifyContent}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ justifyContent: value })}
						>
							<ToggleGroupControlOptionIcon
								icon={AlignStartVerticalIcon}
								value="flex-start"
								label={__("Flex start", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignEndVerticalIcon}
								value="flex-end"
								label={__("Flex end", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalJustifyCenterIcon}
								value="center"
								label={__("Center", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceBetweenIcon}
								value="space-between"
								label={__("Space Between", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceAroundIcon}
								value="space-around"
								label={__("Space Around", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tabletJustifyContent}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) =>
								setAttributes({ tabletJustifyContent: value })
							}
						>
							<ToggleGroupControlOptionIcon
								icon={AlignStartVerticalIcon}
								value="flex-start"
								label={__("Flex start", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignEndVerticalIcon}
								value="flex-end"
								label={__("Flex end", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalJustifyCenterIcon}
								value="center"
								label={__("Center", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceBetweenIcon}
								value="space-between"
								label={__("Space Between", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceAroundIcon}
								value="space-around"
								label={__("Space Around", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobileJustifyContent}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) =>
								setAttributes({ mobileJustifyContent: value })
							}
						>
							<ToggleGroupControlOptionIcon
								icon={AlignStartVerticalIcon}
								value="flex-start"
								label={__("Flex start", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignEndVerticalIcon}
								value="flex-end"
								label={__("Flex end", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalJustifyCenterIcon}
								value="center"
								label={__("Center", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceBetweenIcon}
								value="space-between"
								label={__("Space Between", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceAroundIcon}
								value="space-around"
								label={__("Space Around", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					)}
					<InspectorLabel
						title={__("Align items", "miscellaneous-gutenberg-blocks")}
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
							value={alignItems}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ alignItems: value })}
						>
							<ToggleGroupControlOptionIcon
								icon={alignItemsStartIcon}
								value="flex-start"
								label={__("Flex start", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsEndIcon}
								value="flex-end"
								label={__("Flex end", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsCenterIcon}
								value="center"
								label={__("Center", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsBaselineIcon}
								value="baseline"
								label={__("Baseline", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsStretchIcon}
								value="stretch"
								label={__("Stretch", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsNoneIcon}
								value="none"
								label={__("None", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tabletAlignItems}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tabletAlignItems: value })}
						>
							<ToggleGroupControlOptionIcon
								icon={alignItemsStartIcon}
								value="flex-start"
								label={__("Flex start", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsEndIcon}
								value="flex-end"
								label={__("Flex end", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsCenterIcon}
								value="center"
								label={__("Center", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsBaselineIcon}
								value="baseline"
								label={__("Baseline", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsStretchIcon}
								value="stretch"
								label={__("Stretch", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsNoneIcon}
								value="none"
								label={__("None", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobileAlignItems}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobileAlignItems: value })}
						>
							<ToggleGroupControlOptionIcon
								icon={alignItemsStartIcon}
								value="flex-start"
								label={__("Flex start", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsEndIcon}
								value="flex-end"
								label={__("Flex end", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsCenterIcon}
								value="center"
								label={__("Center", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsBaselineIcon}
								value="baseline"
								label={__("Baseline", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsStretchIcon}
								value="stretch"
								label={__("Stretch", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsNoneIcon}
								value="none"
								label={__("None", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					)}
					<InspectorLabel
						title={__("Grow", "miscellaneous-gutenberg-blocks")}
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
							value={grow}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ grow: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label={__("On", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("Off", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tabletGrow}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tabletGrow: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label={__("On", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("Off", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobileGrow}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobileGrow: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label={__("On", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("Off", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					)}
					<InspectorLabel
						title={__("Shrink", "miscellaneous-gutenberg-blocks")}
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
							value={shrink}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ shrink: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label={__("On", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("Off", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tabletShrink}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tabletShrink: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label={__("On", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("Off", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobileShrink}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobileShrink: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label={__("On", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("Off", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					)}

					<InspectorLabel
						title={__("Hidden", "miscellaneous-gutenberg-blocks")}
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
							value={hidden}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ hidden: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label={__("Yes", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("No", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tabletHidden}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tabletHidden: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label={__("Yes", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("No", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobileHidden}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobileHidden: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label={__("Yes", "miscellaneous-gutenberg-blocks")}
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label={__("No", "miscellaneous-gutenberg-blocks")}
							/>
						</ToggleGroupControl>
					)}
				</PanelBody>
			</InspectorControls>
			<div
				{...innerBlocksProps}
				// {...blockProps}
				// style={{
				// 	width: `${
				// 		layout == "desktop"
				// 			? width > 0
				// 				? `${width}${widthUnit}`
				// 				: "initial"
				// 			: layout == "tablet"
				// 			? tabletWidth > 0
				// 				? `${tabletWidth}${tabletWidthUnit}`
				// 				: "initial"
				// 			: mobileWidth > 0
				// 			? `${mobileWidth}${mobileWidthUnit}`
				// 			: "initial"
				// 	}`,
				// 	columnGap: `${
				// 		layout == "desktop"
				// 			? columnGap > 0
				// 				? `${columnGap}${columnGapUnit}`
				// 				: "initial"
				// 			: layout == "tablet"
				// 			? tabletColumnGap > 0
				// 				? `${tabletColumnGap}${tabletColumnGapUnit}`
				// 				: "initial"
				// 			: mobileColumnGap > 0
				// 			? `${mobileColumnGap}${mobileColumnGapUnit}`
				// 			: "initial"
				// 	}`,
				// 	rowGap: `${
				// 		layout == "desktop"
				// 			? rowGap > 0
				// 				? `${rowGap}${rowGapUnit}`
				// 				: "initial"
				// 			: layout == "tablet"
				// 			? tabletRowGap > 0
				// 				? `${tabletRowGap}${tabletRowGapUnit}`
				// 				: "initial"
				// 			: mobileRowGap > 0
				// 			? `${mobileRowGap}${mobileRowGapUnit}`
				// 			: "initial"
				// 	}`,
				// }}
			></div>
		</>
	);
}
