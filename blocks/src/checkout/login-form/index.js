import { registerBlockType } from '@wordpress/blocks';
import { ReactComponent as LoginForm } from '../../icons/login-form.svg';

import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit: Edit,
	icon: LoginForm,
} );
