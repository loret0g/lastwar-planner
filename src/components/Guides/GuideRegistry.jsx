import GuideEquipment from './GuideEquipment.jsx';
import GuideRoles from './GuideRoles.jsx';
import GuideHeros from './GuideHeros.jsx';
import GuideShield from './GuideShield.jsx';
import GuideAttackEnemy from './GuideAttackEnemy.jsx';

export const guides = {
  equipment: {
    title: 'Upgrade equipment',
    Component: GuideEquipment,
  },
  roles: {
    title: 'Request roles',
    Component: GuideRoles,
  },
  
  heros: {
    title: 'Hero Management',
    Component: GuideHeros,
  },
  shield: {
    title: 'Put shield',
    Component: GuideShield,
  },
  shield: {
    title: 'Put shield',
    Component: GuideShield,
  },
  attack: {
    title: 'Attack enemy',
    Component: GuideAttackEnemy,
  }
};