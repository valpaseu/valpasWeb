import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { DataStore } from "aws-amplify";
import { TimeEntry } from "../../../models";
import { groupBy } from "./group.jsx";
import { totaldaytime, totalweektime } from "./totaltime.jsx";
import { Details } from "./details.jsx";
import { WeekReport } from "./buttons.jsx";

export const Timelist = ({
  selWork = "",
  selUser = "",
  isEmpty = true,
  lang = {
    week: "Week",
    total_hours: "Total hours",
  },
}) => {
  const [timeList, setTimeList] = useState(null);

  useEffect(() => {
    let isActive = false;

    const loadTimeList = async () => {
      await DataStore.query(TimeEntry)
        .then((data) => {
          let fiteredData = data.filter(
            (item) => item.workspaceId === selWork && item.userId === selUser && !item.isActive && item.isSent
          );
          let grouped = groupBy(fiteredData);

          if (grouped.length > 0) {
            setTimeList(grouped);
          } else {
            setTimeList(null);
          }
        })
        .catch((error) => console.warn(error));
    };

    !isActive && selWork !== "" && selUser !== "" && isEmpty && loadTimeList();

    return () => (isActive = true);
  }, [selWork, selUser, isEmpty]);

  return (
    timeList && (
      <Grid item container xs={12} spacing={2}>
        {timeList.map((item) => (
          <Grid item container xs={12} key={item.week}>
            <Grid item xs={6}>
              <Typography variant="h6" color="text.secondary">
                {lang.week}: {item.week}
              </Typography>
              <Typography variant="p" color="text.secondary">
                {lang.total_hours}: {totalweektime(item).h}:{totalweektime(item).min}
              </Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="flex-end">
              <WeekReport data={item} isEmpty={isEmpty} />
            </Grid>
            {item.arr.map((day) => (
              <Grid item container xs={12} key={day.date}>
                <Grid
                  item
                  container
                  xs={12}
                  sx={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "1px",
                    backgroundColor: "background.custom",
                    marginBottom: "15px",
                    marginTop: "15px",
                    padding: 1,
                  }}
                >
                  <Grid item xs={12}>
                    <Typography variant="h6" color="text.secondary">
                      {day.date}
                    </Typography>
                    <Typography variant="p" color="text.secondary">
                      {lang.total_hours}: {totaldaytime(day).h}:{totaldaytime(day).min}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Details date={day} isEmpty={isEmpty} lang={lang} />
                </Grid>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    )
  );
};
