import React from 'react';
import {View, Text, Image} from 'react-native';
import libmoji from 'libmoji';
import styles from './styles';

function buildCpanelUrl(comicId, avatarId, transparent, scale) {
  return (
    '' +
    baseCpanelUrl +
    comicId +
    '-' +
    avatarId +
    '-v3.png?transparent=' +
    transparent +
    '&scale=' +
    scale
  );
}

const Bitmoji = (props) => {
  const comicId = libmoji.getComicId(libmoji.randTemplate(libmoji.templates));
  const avatarId = libmoji.getAvatarId(
    'https://render.bitstrips.com/v2/cpanel/8968038-99397600010_1-s5-v1.png?transparent=1&palette=1',
  );
  const outfit = libmoji.randOutfit(
    libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands('male'))),
  );
  const gender = libmoji.genders[libmoji.randInt(2)];
  const style = libmoji.styles[libmoji.randInt(3)];
  const traits = libmoji.randTraits(libmoji.getTraits(gender[0], style[0]));

  return (
    <Image
      style={{
        width: 70,
        height: 70,
        resizeMode: 'contain',
      }}
      source={{
        uri:
          'https://preview.bitmoji.com/avatar-builder-v3/preview/body?scale=3&gender=1&style=5&rotation=7&beard=1630&brow=1541&cheek_details=1354&ear=1425&eye=1622&eyelash=2279&eye_details=-1&face_lines=1366&glasses=2441&hair=1719&hat=2555&jaw=1392&mouth=2337&nose=1460&beard_tone=8935738&blush_tone=16299718&brow_tone=13816322&eyeshadow_tone=14725305&hair_tone=4788241&hair_treatment_tone=666890&lipstick_tone=8929692&pupil_tone=11188685&skin_tone=6240025&body=1&face_proportion=4&eye_spacing=1&eye_size=0&outfit=978521',
      }}
    />
  );
};

export default Bitmoji;
