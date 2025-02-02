import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  useMemo,
} from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import CharacterGroupComponent from './character-group';

export type Text =
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | Iterable<ReactNode>
  | ReactPortal
  | null
  | undefined;

export enum CharacterGroup {
  ANGLIE = 'Anglie',
  ARAGON = 'Aragon',
  BRETAN = 'Bretaň',
  FLANDRY = 'Flandry',
  FRANCIE = 'Francie',
  IRSKO = 'Irsko',
  KASTILIE = 'Kastilie',
  NAVARRA = 'Navarra',
  NEAPOL = 'Neapol',
  PIRATI = 'Piráti',
  SAVOJSKO = 'Savojsko',
  SKOTSKO = 'Skotsko',
  SVRR = 'SVŘŘ',
  SVEDSKO = 'Švédsko',
  GRANADA = 'Granada',
  JANOV = 'Janov',
  PAPAL_STATES = 'Papežské státy',
  PORTUGALSKO = 'Portugalsko',
  SICILIE = 'Sicílie',
  TUNIS = 'Tunis',
  ZENEVA = 'Ženeva',
}

export type CharacterProps = {
  jmnoPostavy: string;
  obsazeno: boolean;
  popisPostavy: any;
  rmeekPostavy: { gatsbyImageData: any };
  skupina: CharacterGroup;
};

const Postavy = () => {
  const data = useStaticQuery(graphql`
        query Postavy {
          allContentfulPostavy {
            nodes {
              jmnoPostavy
              skupina
              obsazeno
              popisPostavy {
                raw
                }
              rmeekPostavy {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      `);

  const groupCharactersByGroup = (
    characters: CharacterProps[],
  ): Record<CharacterGroup, CharacterProps[]> => {
    return characters.reduce((acc, character) => {
      const group = character.skupina as CharacterGroup;

      if (!acc[group]) {
        acc[group] = [];
      }

      acc[group].push(character);

      return acc;
    }, {} as Record<CharacterGroup, CharacterProps[]>);
  };

  const charactersByGroup: Record<string, CharacterProps[]> = useMemo(
    () => groupCharactersByGroup(data.allContentfulPostavy.nodes),
    [data.allContentfulPostavy.nodes],
  );

  const groupsSortedAlphabetically = useMemo(
    () =>
      Object.entries(charactersByGroup).sort(([a], [b]) => a.localeCompare(b)),
    [charactersByGroup],
  );

  return (
    <div>
      {groupsSortedAlphabetically.map(([groupName, group], index) => (
        <CharacterGroupComponent
          groupName={groupName}
          group={group}
          key={index}
        />
      ))}
    </div>
  );
};

export default Postavy;
