jQuery('#assignmentTags').suggest("<?php echo site_url(); ?>/wp-admin/admin-ajax.php?action=ajax-tag-search&tax=post_tag", {multiple:true, multipleSep: ","});