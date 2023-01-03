import React, { Fragment } from "react";

import { Table, TableBody, TableRow, IconButton, Box, TableContainer, useTheme, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Time, EditSTime, EditETime } from "./times.jsx";
import { Moreitem, Moreitemday } from "./buttons.jsx";
import { TotalTime } from "./edittotaltime.jsx";
import { EditDescriptionMD } from "./editdescription.jsx";
import { ChangeWorkplaceMD, ChangeWorkplaceSM } from "./workplacechange.jsx";
import { EditDateMD, EditDateSM } from "./editdate.jsx";
import { BreakitemMD, AddBreakMD, AddBreakSM, BreakitemSM } from "./break.jsx";
import { totaldaytime, totalweektime } from "./totaltime.jsx";
import { CustomTableCell } from "./tablecell.jsx";
import { PropTypes } from "prop-types";

const isSent = (data) => {
  const items = data.arr.length;
  const sent = data.arr.filter((item) => item.isSent === true).length;

  return sent === items;
};

export const WeekRow = ({ grouped, lang, works, isEmpty }) => {
  return grouped.map((week) => (
    <Fragment key={week.week}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 1,
          marginTop: 1,
          marginBottom: 1,
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="h6" color="text.secondary">
          {lang.history.week} {week.week}
        </Typography>

        <Typography variant="p" color="text.secondary">
          {lang.history.total_time} {totalweektime(week).h > 9 ? totalweektime(week).h : "0" + totalweektime(week).h}:
          {totalweektime(week).min > 9 ? totalweektime(week).min : "0" + totalweektime(week).min}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          {week.period}
        </Typography>
      </Box>

      <Row week={week} lang={lang.history} isEmpty={isEmpty} works={works} />
    </Fragment>
  ));
};

const Row = ({ week, lang, works, isEmpty }) => {
  const theme = useTheme();

  return (
    week &&
    week.arr.map((date) => {
      let hours = String(totaldaytime(date).h).padStart(2, "0");
      let minutes = String(totaldaytime(date).min).padStart(2, "0");

      return (
        <Box
          key={date.date}
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: "1px",
            backgroundColor: "background.paper",
            marginTop: "10px",
            padding: 1,
          }}
        >
          <TableContainer>
            <Table aria-label="collapsible table" size="small">
              <TableBody>
                {date.arr.map((row, index) => (
                  <Fragment key={index}>
                    <DetailsMD
                      sx={{
                        [theme.breakpoints.down("sm")]: {
                          display: "none",
                        },
                      }}
                      key={[index, "md"]}
                      row={row}
                      workplaces={works}
                      lang={lang}
                      isEmpty={isEmpty}
                      total={`${hours}:${minutes}`}
                      date={date.date}
                    />
                    <DetailsSM
                      sx={{
                        [theme.breakpoints.up("sm")]: {
                          display: "none",
                        },
                      }}
                      key={[index, "sm"]}
                      row={row}
                      workplaces={works}
                      lang={lang}
                      isEmpty={isEmpty}
                      total={`${hours}:${minutes}`}
                      date={date.date}
                    />
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      );
    })
  );
};

const DetailsSM = ({ row, workplaces, lang, isEmpty, total, date, sx }) => {
  const [open, setOpen] = React.useState(false);
  const data = row.arr.sort((a, b) => {
    let sTime = new Date(a.timeInterval.start);
    let eTime = new Date(b.timeInterval.start);

    return sTime - eTime;
  });

  return (
    <Fragment>
      <TableRow sx={sx}>
        <CustomTableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)} sx={{ cursor: "pointer" }}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </CustomTableCell>

        <CustomTableCell align="center" colSpan={2}>
          <Typography variant="p" fontWeight="800">
            {date}
          </Typography>
        </CustomTableCell>

        <CustomTableCell align="right">
          <Moreitemday date={row} lang={lang} isEmpty={isEmpty} />
        </CustomTableCell>
      </TableRow>

      <TableRow sx={sx}>
        <CustomTableCell colSpan={4}>
          <Typography variant="p" fontWeight="800">
            {workplaces.find((item) => item.id === row.workId) !== undefined
              ? workplaces.find((item) => item.id === row.workId).name
              : lang.title.select_workplace}
          </Typography>
        </CustomTableCell>
      </TableRow>

      <TableRow sx={sx}>
        <CustomTableCell align="left">
          <Typography variant="p" fontWeight="800">
            <Time time={row.arr[row.arr.length - 1].timeInterval.start} />
          </Typography>
        </CustomTableCell>

        <CustomTableCell align="left">
          <Typography variant="p" fontWeight="800">
            <Time time={row.arr[0].timeInterval.end} />
          </Typography>
        </CustomTableCell>

        <CustomTableCell align="right" colSpan={2}>
          <Typography variant="p" fontWeight="800">
            {total}
          </Typography>
        </CustomTableCell>
      </TableRow>

      {open && (
        <>
          <RowDetailsSM data={data} workplaces={workplaces} lang={lang} isEmpty={isEmpty} sx={sx} />
          <AddBreakSM data={data} isEmpty={isEmpty} isDisable={isSent(row)} sx={sx} lang={lang.breaks} />
        </>
      )}
    </Fragment>
  );
};

const DetailsMD = ({ row, workplaces, lang, isEmpty, total, date, sx }) => {
  const [open, setOpen] = React.useState(false);
  const data = row.arr.sort((a, b) => {
    let sTime = new Date(a.timeInterval.start);
    let eTime = new Date(b.timeInterval.start);

    return sTime - eTime;
  });

  return (
    <Fragment>
      <TableRow sx={sx}>
        <CustomTableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)} sx={{ cursor: "pointer" }}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </CustomTableCell>

        <CustomTableCell align="left">
          <Typography variant="p" fontWeight="800">
            {date}
          </Typography>
        </CustomTableCell>

        <CustomTableCell align="left">
          <Typography variant="p" fontWeight="800">
            {workplaces.find((item) => item.id === row.workId) !== undefined
              ? workplaces.find((item) => item.id === row.workId).name
              : "Vaihda työpaikkaa"}
          </Typography>
        </CustomTableCell>

        <CustomTableCell align="right">
          <Typography variant="p" fontWeight="800">
            <Time time={row.arr[row.arr.length - 1].timeInterval.start} /> - <Time time={row.arr[0].timeInterval.end} />
          </Typography>
        </CustomTableCell>

        <CustomTableCell align="right">
          <Typography variant="p" fontWeight="800">
            {total}
          </Typography>
        </CustomTableCell>

        <CustomTableCell align="right">
          <Moreitemday date={row} lang={lang} isEmpty={isEmpty} />
        </CustomTableCell>
      </TableRow>

      {open && (
        <>
          <RowDetailsMD sx={sx} data={data} workplaces={workplaces} lang={lang} isEmpty={isEmpty} />
          <AddBreakMD sx={sx} data={data} isEmpty={isEmpty} isDisable={isSent(row)} lang={lang.breaks} />
        </>
      )}
    </Fragment>
  );
};

const RowDetailsSM = ({ data, lang, workplaces, isEmpty, sx }) => {
  return data.map((row, i) => {
    return (
      <Fragment key={i}>
        <TableRow sx={sx}>
          <EditDateSM data={row} lang={lang} sx={{ ...sx }} />
          <ChangeWorkplaceSM
            date={row}
            workplaces={workplaces}
            work={row.workspaceId}
            lang={lang}
            isEmpty={isEmpty}
            sx={{ ...sx }}
          />
        </TableRow>

        <TableRow>
          <CustomTableCell align="right">
            <EditSTime date={row} />
          </CustomTableCell>

          <CustomTableCell align="left">
            <EditETime date={row} />
          </CustomTableCell>

          <CustomTableCell align="right">
            <TotalTime date={row} />
          </CustomTableCell>

          <CustomTableCell align="right">
            <Moreitem date={row} lang={lang} isEmpty={isEmpty} />
          </CustomTableCell>
        </TableRow>

        {row.break &&
          row.break.map((item, i) => (
            <BreakitemSM
              sx={sx}
              key={i}
              item={item}
              data={row}
              index={i}
              isEmpty={isEmpty}
              isSent={data.isSent}
              lang={lang.breaks}
            />
          ))}
      </Fragment>
    );
  });
};

const RowDetailsMD = ({ data, lang, workplaces, isEmpty, sx }) => {
  return data.map((row, i) => {
    return (
      <Fragment key={i}>
        <TableRow sx={sx}>
          <EditDescriptionMD date={row} lang={lang} />

          <EditDateMD data={row} lang={lang} />

          <ChangeWorkplaceMD date={row} workplaces={workplaces} work={row.workspaceId} lang={lang} isEmpty={isEmpty} />

          <CustomTableCell align="right">
            <EditSTime date={row} /> {" - "} <EditETime date={row} />
          </CustomTableCell>

          <CustomTableCell align="right">
            <TotalTime date={row} />
          </CustomTableCell>

          <CustomTableCell align="right">
            <Moreitem date={row} lang={lang} isEmpty={isEmpty} />
          </CustomTableCell>
        </TableRow>

        {row.break &&
          row.break.map((item, i) => (
            <BreakitemMD
              sx={sx}
              key={i}
              item={item}
              data={row}
              index={i}
              isEmpty={isEmpty}
              isSent={data.isSent}
              lang={lang.breaks}
            />
          ))}
      </Fragment>
    );
  });
};

DetailsSM.propTypes = {
  row: PropTypes.object,
  workplaces: PropTypes.array,
  lang: PropTypes.object,
  isEmpty: PropTypes.bool,
  total: PropTypes.string,
  date: PropTypes.string,
  sx: PropTypes.object,
};

DetailsMD.propTypes = {
  row: PropTypes.object,
  workplaces: PropTypes.array,
  lang: PropTypes.object,
  isEmpty: PropTypes.bool,
  total: PropTypes.string,
  date: PropTypes.string,
  sx: PropTypes.object,
};
