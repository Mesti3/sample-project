import React from 'react';

const Navigation = React.lazy(() => import('./menu/Navigation'));
const Schedule = React.lazy(() => import('./schedule/schedule'));
const LoadFile = React.lazy(() => import('./loadFile/loadFile'));
const CreateFile = React.lazy(() => import('./createFile/createFile'));
const Modal = React.lazy(() => import('./UI/Modal/Modal'));
const Color = React.lazy(() => import('./UI/color/color'));
const Calendar = React.lazy(() => import('./calendar/calendar'));
const Generate = React.lazy(() => import('./generateTest/generateTest'));

export {
  Navigation,
  Schedule,
  LoadFile,
  CreateFile,
  Modal,
  Color,
  Calendar,
  Generate
}
