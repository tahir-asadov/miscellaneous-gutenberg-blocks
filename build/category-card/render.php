<?php
$vertical = !empty($attributes['vertical']) && $attributes['vertical'] == true ? true : false;
$isLink = !empty($attributes['isLink']) && $attributes['isLink'] == true ? true : false;
$disable_css = !empty($attributes['disable_css']) && $attributes['disable_css'] == 1;
$categoryName = !empty($attributes['categoryName']) ? $attributes['categoryName'] : '';
$categoryCount = !empty($attributes['categoryCount']) ? $attributes['categoryCount'] : '';
$categoryUrl = !empty($attributes['categoryUrl']) ? $attributes['categoryUrl'] : '';
$postNamePlural = !empty($attributes['postNamePlural']) ? $attributes['postNamePlural'] : '';
$postNameSingular = !empty($attributes['postNameSingular']) ? $attributes['postNameSingular'] : '';
$imageName = !empty($attributes['imageName']) ? $attributes['imageName'] : '';
$imageUrl = !empty($attributes['imageUrl']) ? $attributes['imageUrl'] : '';




$gap = !empty($attributes['gap']) ? $attributes['gap'] : '0';
$imageWidth = !empty($attributes['imageWidth']) ? $attributes['imageWidth'] : '0';

$classes = [];
if ($vertical) {
  $classes[] = 'wp-block-miscellaneous-gutenberg-blocks-category-card--vertical';
}
$additional_attributes['class'] = join(' ', $classes);
$additional_attributes['id'] = 'miscellaneous-gutenberg-blocks-' . uniqid();
$categories = get_categories();
$imageExtension = '';
if ($imageUrl) {
  $imageExtension = pathinfo($imageUrl, PATHINFO_EXTENSION);
}
$tagName = $isLink ? 'a' : 'div';
$href = $isLink ? ' href="' . $categoryUrl . '" ' : '';
?>
<<?php echo $tagName; ?> <?php echo $href; ?> <?php echo get_block_wrapper_attributes($additional_attributes); ?>> <div class="wp-block-miscellaneous-gutenberg-blocks-category-card--left">
    <span class="wp-block-miscellaneous-gutenberg-blocks-category-card--image-wrapper wp-block-miscellaneous-gutenberg-blocks-category-card--type-<?php echo $imageExtension; ?>">
      <img src="<?php echo $imageUrl; ?>" alt="<?php echo $imageName; ?>">
    </span>
  </div>
  <div class="wp-block-miscellaneous-gutenberg-blocks-category-card--right">
    <?php if ($categoryName) { ?>
      <span class="wp-block-miscellaneous-gutenberg-blocks-category-card--name"><?php echo $categoryName; ?></span>
    <?php } ?>
    <?php if ($categoryCount) { ?>
      <span class="wp-block-miscellaneous-gutenberg-blocks-category-card--count"><?php echo $categoryCount; ?>&nbsp;<?php echo $categoryCount > 1 ? $postNamePlural : $postNameSingular; ?></span>
    <?php } ?>
  </div>
</<?php echo $tagName; ?>> <style>
  #<?php echo $additional_attributes['id']; ?> {

    <?php if ($gap) { ?>
      <?php echo "gap: {$gap}px;" ?>
    <?php } ?>
    <?php if ($imageWidth) { ?>
      .wp-block-miscellaneous-gutenberg-blocks-category-card--image-wrapper {
        <?php echo "width: {$imageWidth}px;" ?>
        <?php echo "height: {$imageWidth}px;" ?>
        <?php echo "border-radius: {$imageWidth}px;" ?>
      }

    <?php } ?>
  }
</style>