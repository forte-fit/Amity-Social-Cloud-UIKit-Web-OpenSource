import styled, { css } from 'styled-components';

import UserRegular from '~/icons/UserRegular';
import ChevronRight from '~/icons/ChevronRight';
import Pencil from '~/icons/Pencil';

export const ControlsContainer = styled.div``;

export const ControlItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 24px 0 20px;
  border-bottom: 1px solid #f7f7f8;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f8;
  }
`;

export const SideWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ControlItemLabel = styled.div`
  padding-right: 8px;
  ${({ theme }) => theme.typography.body};
  color: ${({ theme, isDanger }) =>
    isDanger ? theme.palette.alert.main : theme.palette.neutral.main};
`;

export const ControlItemState = styled.span`
  ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.palette.neutral.shade3};
`;

export const ControlItemArrowRight = styled(ChevronRight)`
  width: 16px !important;
  padding-left: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.neutral.shade3};
`;

const controlIconStyle = css`
  width: 24px !important;
  padding-right: 8px;
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.palette.neutral.main};
`;

export const MembersIcon = styled(UserRegular)`
  ${controlIconStyle}
`;

export const GroupSettingIcon = styled(Pencil)`
  ${controlIconStyle}
`;
