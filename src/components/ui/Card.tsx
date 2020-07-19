import React from "react";
import styles from "./Card.module.scss";
import { ForksList } from "../main/ForksList";

type Props = {
  item: Gist;
};

export const Card: React.FC<Props> = ({ item }) => {
    return (
        <div
            className={`${styles.cardWrapper} disp-flex flex-column flex-just--sb`}
        >
             <div className={`disp-flex ${styles.cardImgWrapper}`}>
                <img
                    src={item.owner.avatar_url}
                    alt={item.owner.login}
                    className={styles.cardImg}
                />
                <div className={`disp-flex flex-column ${styles.cardInfo}`}>
                  {item.description}
                </div>
            </div>
            <div className="disp-flex flex-align--center">

              { item.files && Object.values(item.files).map((file: FileType, id: number) =>
                  <span key={id} className={`${styles.tag} mar-lft--5`}>{file.language}</span>
              )}
            </div>
            <div>
              <ForksList id={item.id}/>
            </div>
        </div>
    );
};
