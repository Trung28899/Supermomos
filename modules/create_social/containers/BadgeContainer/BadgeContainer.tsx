import React, { useState } from "react";
import classes from "./BadgeContainer.module.scss";
import Badge from "@/modules/common/components/Badge/Badge";

interface Props {
  badges: string[];
  setBadges: (stringArray: string[]) => void;
}

function BadgeContainer({ badges, setBadges }: Props) {
  const [notChosenBadges, setNotChosenBadges] = useState(badges);
  const [chosenBadges, setChosenBadges] = useState<string[]>([]);

  const chooseBadge = (value: string) => {
    const badgesReplicate = [...notChosenBadges];
    const valueIndex = badgesReplicate.indexOf(value);

    if (valueIndex !== -1) {
      badgesReplicate.splice(valueIndex, 1);
      setNotChosenBadges(badgesReplicate);
      setChosenBadges([...chosenBadges, value]);
      setBadges([...chosenBadges, value]);
    }
  };

  const putBackBadge = (value: string) => {
    const chosenBadgesReplicate = [...chosenBadges];

    const valueIndex = chosenBadgesReplicate.indexOf(value);

    if (valueIndex !== -1) {
      chosenBadgesReplicate.splice(valueIndex, 1);
      setChosenBadges(chosenBadgesReplicate);
      setNotChosenBadges([...notChosenBadges, value]);
    }
  };

  return (
    <div className={classes.container}>
      {chosenBadges.length > 0 && (
        <div className={classes.badgeLine}>
          {chosenBadges.map((value) => (
            <Badge
              variant="purple"
              closeIconShow
              key={value}
              onClick={() => putBackBadge(value)}
            >
              {value}
            </Badge>
          ))}
        </div>
      )}

      <div className={classes.badgeLine}>
        {notChosenBadges.map((value) => (
          <Badge key={value} onClick={() => chooseBadge(value)}>
            {value}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default BadgeContainer;
