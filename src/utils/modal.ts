import React from 'react';

export function handleModalClose(
	type: 'click' | 'esc',
	target: TargetWithAttributes,
	setState: React.Dispatch<React.SetStateAction<boolean>>,
	namedsAttrClose?: string[]
) {
	if (type === 'esc') {
		return setState(false);
	}

	for (let namedAttrClose of namedsAttrClose!) {
		if (target.attributes?.getNamedItem(namedAttrClose)) {
			return setState(false);
		}
	}
}
