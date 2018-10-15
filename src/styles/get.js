import { darken, lighten, transparentize, } from 'polished';

import createSelector from 'selectorator';

const opacifier = opacity => colour => typeof opacity === 'undefined' ? colour : transparentize( 1 - opacity, colour );
const get = {
  colours: {
    complementary   : createSelector( [ 'theme.colours.complementary', ], colour => colour || '#1C9B78' ),
    complementaryD1 : createSelector( [ 'theme.colours.complementary', ], colour => darken( 0.1, colour || '#1C9B78' ) ),
    complementaryD2 : createSelector( [ 'theme.colours.complementary', ], colour => darken( 0.2, colour || '#1C9B78' ) ),
    complementaryL1 : createSelector( [ 'theme.colours.complementary', ], colour => lighten( 0.1, colour || '#1C9B78' ) ),
    complementaryL2 : createSelector( [ 'theme.colours.complementary', ], colour => lighten( 0.2, colour || '#1C9B78' ) ),
    grey            : createSelector( [ 'theme.colours.grey', ], colour => colour || '#968A83' ),
    greyD1          : createSelector( [ 'theme.colours.grey', ], colour => darken( 0.1, colour || '#968A83' ) ),
    greyD2          : createSelector( [ 'theme.colours.grey', ], colour => darken( 0.2, colour || '#968A83' ) ),
    greyL1          : createSelector( [ 'theme.colours.grey', ], colour => lighten( 0.1, colour || '#968A83' ) ),
    greyL2          : createSelector( [ 'theme.colours.grey', ], colour => lighten( 0.2, colour || '#968A83' ) ),
    primary         : createSelector( [ 'theme.colours.primary', ], colour => colour || '#ED702A' ),
    primaryD1       : createSelector( [ 'theme.colours.primary', ], colour => darken( 0.1, colour || '#ED702A' ) ),
    primaryD2       : createSelector( [ 'theme.colours.primary', ], colour => darken( 0.2, colour || '#ED702A' ) ),
    primaryL1       : createSelector( [ 'theme.colours.primary', ], colour => lighten( 0.1, colour || '#ED702A' ) ),
    primaryL2       : createSelector( [ 'theme.colours.primary', ], colour => lighten( 0.2, colour || '#ED702A' ) ),
    secondary       : createSelector( [ 'theme.colours.secondary', ], colour => colour || '#EDA12A' ),
    secondaryD1     : createSelector( [ 'theme.colours.secondary', ], colour => darken( 0.1, colour || '#EDA12A' ) ),
    secondaryD2     : createSelector( [ 'theme.colours.secondary', ], colour => darken( 0.2, colour || '#EDA12A' ) ),
    secondaryL1     : createSelector( [ 'theme.colours.secondary', ], colour => lighten( 0.1, colour || '#EDA12A' ) ),
    secondaryL2     : createSelector( [ 'theme.colours.secondary', ], colour => lighten( 0.2, colour || '#EDA12A' ) ),
    supplementary   : createSelector( [ 'theme.colours.supplementary', ], colour => colour || '#265B9B' ),
    supplementaryD1 : createSelector( [ 'theme.colours.supplementary', ], colour => darken( 0.1, colour || '#265B9B' ) ),
    supplementaryD2 : createSelector( [ 'theme.colours.supplementary', ], colour => darken( 0.2, colour || '#265B9B' ) ),
    supplementaryL1 : createSelector( [ 'theme.colours.supplementary', ], colour => lighten( 0.1, colour || '#265B9B' ) ),
    supplementaryL2 : createSelector( [ 'theme.colours.supplementary', ], colour => lighten( 0.2, colour || '#265B9B' ) ),
    white           : createSelector( [ 'theme.colours.grey', ], colour => lighten( 0.4, colour || '#968A83' ) ),
    whiteD1         : createSelector( [ 'theme.colours.grey', ], colour => lighten( 0.35, colour || '#968A83' ) ),
    whiteD2         : createSelector( [ 'theme.colours.grey', ], colour => lighten( 0.3, colour || '#968A83' ) ),
    whiteL1         : createSelector( [ 'theme.colours.grey', ], colour => lighten( 0.42, colour || '#968A83' ) ),
    whiteL2         : createSelector( [ 'theme.colours.grey', ], colour => lighten( 0.44, colour || '#968A83' ) ),
    withOpacity     : ( opacity, name ) => createSelector( [ get.colours[name], ], opacifier( opacity ) ),
  },

  scrollBar: createSelector( [ 'theme.scrollBar', ] ),
};

export default get;
