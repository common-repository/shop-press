<?php
/**
 * Thank You Order Details Customer.
 *
 * @package ShopPress
 */

if ( is_checkout() ) {
	sp_load_builder_template( 'thankyou/order-details-customer' );
}
