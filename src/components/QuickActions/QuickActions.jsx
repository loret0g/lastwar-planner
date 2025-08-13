import { useState } from 'react';
import { guides } from '../Guides/GuideRegistry';
import Modal from '../Modal/Modal';
import styles from './QuickActions.module.css';

export default function QuickActions() {
  const [openKey, setOpenKey] = useState(null);
  const guide = openKey ? guides[openKey] : null;

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.grid}>
          <button className={styles.action} onClick={() => setOpenKey('equipment')}>
            Mejorar el equipamiento de los héroes
          </button>
          <button className={styles.action} onClick={() => setOpenKey('roles')}>
            Cargos de la capital
          </button>
        </div>
      </div>

      <Modal isOpen={!!guide} onClose={() => setOpenKey(null)}>
        {guide && <guide.Component />}
      </Modal>
    </>
  );
}