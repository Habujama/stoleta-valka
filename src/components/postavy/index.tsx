import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  useMemo,
} from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import CharacterGroupComponent from './character-group';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export type Text =
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | Iterable<ReactNode>
  | ReactPortal
  | null
  | undefined;

export enum LandType {
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

export type LandDataProps = {
  erbZem: IGatsbyImageData | null;
  nzevZem: string;
  popisZem: any;
  rozdlova: IGatsbyImageData | null;
};

export type CharacterProps = {
  jmnoPostavy: string;
  obsazeno: boolean;
  popisPostavy: any;
  rmeekPostavy: { gatsbyImageData: any };
  skupina: LandType;
};

const Postavy = () => {
  const data = useStaticQuery(graphql`
        query CombinedQuery {
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
    allContentfulSkupinyPostav {
      nodes {
        erbZem {
          gatsbyImageData(placeholder: BLURRED, width: 80)
          title
        }
        nzevZem
        popisZem {
          raw
        }
        rozdlova {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
      `);

  const characterGroups = data.allContentfulPostavy.nodes;
  const landData = data.allContentfulSkupinyPostav.nodes;

  const groupCharactersByGroup = (
    characters: CharacterProps[],
  ): Record<LandType, CharacterProps[]> => {
    return characters.reduce((acc, character) => {
      const group = character.skupina as LandType;

      if (!acc[group]) {
        acc[group] = [];
      }

      acc[group].push(character);

      return acc;
    }, {} as Record<LandType, CharacterProps[]>);
  };

  const charactersByGroup: Record<string, CharacterProps[]> = useMemo(
    () => groupCharactersByGroup(characterGroups),
    [characterGroups],
  );

  const groupsSortedAlphabetically = useMemo(
    () =>
      Object.entries(charactersByGroup).sort(([a], [b]) => a.localeCompare(b)),
    [charactersByGroup],
  );

  const enrichedGroups = useMemo(() => {
    const landDataMap = landData.reduce(
      (acc: { [x: string]: any }, group: LandDataProps) => {
        acc[group.nzevZem] = group;
        return acc;
      },
      {} as Record<string, (typeof landData)[0]>,
    );

    return groupsSortedAlphabetically.map(([groupName, characters]) => {
      return [groupName, { ...landDataMap[groupName] }, characters, ,];
    });
  }, [groupsSortedAlphabetically, landData]);

  console.log(enrichedGroups);

  return (
    <div>
      {enrichedGroups.map(([groupName, landInfo, group], index) => (
        <CharacterGroupComponent
          groupName={groupName}
          landInfo={landInfo}
          group={group}
          key={index}
        />
      ))}
    </div>
  );
};

export default Postavy;
