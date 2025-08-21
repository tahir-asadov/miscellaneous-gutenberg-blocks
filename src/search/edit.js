import { InspectorControls } from "@wordpress/block-editor";
import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	PanelBody,
	TextControl,
	RangeControl,
} from "@wordpress/components";

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const classNames = [];
	if (!attributes.disable_css) {
		classNames.push("has-style");
	}
	if (attributes.show_search_icon) {
		classNames.push("show-search-icon");
	}
	if (attributes.show_category) {
		classNames.push("show-category");
	}
	const blockProps = useBlockProps({
		className: classNames.join(" "),
		style: { height: `${attributes.height}px` },
	});
	console.log("blockProps", blockProps);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "miscellaneous-gutenberg-blocks")}>
					<ToggleGroupControl
						label={__("Category selector", "miscellaneous-gutenberg-blocks")}
						value={attributes.show_category}
						isBlock={true}
						__nextHasNoMarginBottom
						onChange={(value) => setAttributes({ show_category: value })}
					>
						<ToggleGroupControlOption
							isAdaptiveWidth={true}
							value={true}
							label={__("Show", "miscellaneous-gutenberg-blocks")}
						/>
						<ToggleGroupControlOption
							isAdaptiveWidth={true}
							value={false}
							label={__("Hide", "miscellaneous-gutenberg-blocks")}
						/>
					</ToggleGroupControl>
					<ToggleGroupControl
						label={__("Show search icon", "miscellaneous-gutenberg-blocks")}
						value={attributes.show_search_icon}
						isBlock={true}
						__nextHasNoMarginBottom
						onChange={(value) => setAttributes({ show_search_icon: value })}
					>
						<ToggleGroupControlOption
							isAdaptiveWidth={true}
							value={true}
							label={__("Show", "miscellaneous-gutenberg-blocks")}
						/>
						<ToggleGroupControlOption
							isAdaptiveWidth={true}
							value={false}
							label={__("Hide", "miscellaneous-gutenberg-blocks")}
						/>
					</ToggleGroupControl>
					<ToggleGroupControl
						label={__("Disable CSS", "miscellaneous-gutenberg-blocks")}
						value={attributes.disable_css}
						isBlock={true}
						__nextHasNoMarginBottom
						onChange={(value) => setAttributes({ disable_css: value })}
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
					<TextControl
						label={__("Search placeholder", "miscellaneous-gutenberg-blocks")}
						value={attributes.search_placeholder}
						onChange={(value) => setAttributes({ search_placeholder: value })}
					/>
					<TextControl
						label={__("Category text", "miscellaneous-gutenberg-blocks")}
						value={attributes.category_text}
						onChange={(value) => setAttributes({ category_text: value })}
					/>
					<TextControl
						label={__("Button text", "miscellaneous-gutenberg-blocks")}
						value={attributes.button_text}
						onChange={(value) => setAttributes({ button_text: value })}
					/>
					<RangeControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						value={attributes.height}
						label={null}
						onChange={(value) =>
							setAttributes({
								height: value,
							})
						}
						min={0}
						max={100}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				{attributes.show_category && (
					<select name="cat" class="search-category">
						{attributes.category_text && (
							<option value="">{attributes.category_text}</option>
						)}
					</select>
				)}

				<input
					name="s"
					type="search"
					class="search-input"
					placeholder={attributes.search_placeholder}
				/>
				<button type="submit" class="search-button">
					{attributes.show_search_icon ? (
						<span dangerouslySetInnerHTML={{ __html: "&nbsp;" }} />
					) : (
						attributes.button_text
					)}
				</button>
			</div>
		</>
	);
}
