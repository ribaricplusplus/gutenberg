/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Button from '../button';
import ColorPalette from '../color-palette';
import Swatch from '../swatch';

function ColorOption( { label, value, colors, onChange } ) {
	const [ isOpen, setIsOpen ] = useState( false );
	return (
		<>
			<Button
				className="components-color-list-picker__swatch-button"
				icon={ <Swatch fill={ value } /> }
				onClick={ () => setIsOpen( ( prev ) => ! prev ) }
			>
				{ label }
			</Button>
			{ isOpen && (
				<ColorPalette
					colors={ colors }
					value={ value }
					clearable={ false }
					onChange={ onChange }
				/>
			) }
		</>
	);
}

function ColorListPicker( { colors, labels, value = [], onChange } ) {
	return (
		<div className="components-color-list-picker">
			{ labels.map( ( label, index ) => (
				<ColorOption
					key={ index }
					label={ label }
					value={ value[ index ] }
					colors={ colors }
					onChange={ ( newColor ) => {
						const newColors = value.slice();
						newColors[ index ] = newColor;
						onChange( newColors );
					} }
				/>
			) ) }
		</div>
	);
}

export default ColorListPicker;
