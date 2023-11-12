import {MouseEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const useMeditation = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const navi = useNavigate();
  const [seeMoreDetailModal, setSeeMoreDetailModal] = useState(false);
  // const;
  const state = {openDetail, seeMoreDetailModal};
  const actions = {
    setOpenDetail,
    goDetail: () => {
      navi('/meditation/detail');
    },
    isSeeMoreDetailModalOpen: (e: MouseEvent<HTMLDivElement>) => {
      console.log(e);
      setSeeMoreDetailModal(true);
    },
    isSeeMoreDetailModalClose: () => {
      setSeeMoreDetailModal(false);
    },
  };
  const variables = {};
  return {...state, actions, variables};
};
