<?php
$height = !empty($attributes['height']) ? $attributes['height'] . 'px' : 'initial';
$imagePosition = !empty($attributes['imagePosition']) ? $attributes['imagePosition'] : 'initial';
$showFeaturedImage = !empty($attributes['showFeaturedImage']) && $attributes['showFeaturedImage'] == true ? true : false;
$isLink = !empty($attributes['isLink']) && $attributes['isLink'] == true ? true : false;
$classes = [];
$classes[] = 'wp-block-miscellaneous-gutenberg-blocks-default-featured-image--' . $imagePosition;
$imageUrl = !empty($attributes['imageUrl']) ? $attributes['imageUrl'] : '';
$imageAlt = !empty($attributes['imageAlt']) ? $attributes['imageAlt'] : '';
$postThumbnail = get_the_post_thumbnail_url();
$postLink = get_the_permalink();
$postTitle = get_the_title();
if ($postThumbnail) {
  $imageUrl = $postThumbnail;
  $imageAlt = 'Post image';
}
$styles = '';
$styles .= 'height:' . $height . ';';
$additional_attributes['class'] = join(' ', $classes);
$additional_attributes['id'] = 'miscellaneous-gutenberg-blocks-' . uniqid();
$additional_attributes['style'] = $styles;

?>
<div <?php echo get_block_wrapper_attributes($additional_attributes); ?>>
  <?php if (!empty($attributes['imageUrl'])) { ?>
    <?php if ($isLink) { ?>
      <a href="<?php echo $postLink; ?>" title="<?php echo $postTitle; ?>">
      <?php } ?>
      <img src="<?php echo $imageUrl; ?>" alt="<?php echo $imageAlt; ?>">
      <?php if ($isLink) { ?>
      </a>
    <?php } ?>
  <?php } ?>
</div>