/**
 * Created by liekkas on 16/4/8.
 */
import React, { PropTypes } from 'react'
import { Menus } from '../constants/Consts'
import ContentTemplate from './ContentTemplate'
const MAPPING = Menus.mapping

//电视概况
export const TVUserOverview = () => <ContentTemplate subModule={MAPPING.tvUserOverview.en} />
export const TVUserBehave = () => <ContentTemplate subModule={MAPPING.tvUserBehave.en} />
export const TVBusinessOverview = () => <ContentTemplate subModule={MAPPING.tvBusinessOverview.en} />

//直播业务
export const LBUserOverview = () => <ContentTemplate subModule={MAPPING.lbUserOverview.en} />
export const LBUserBehave = () => <ContentTemplate subModule={MAPPING.lbUserBehave.en} />
export const LBCGUserAna = () => <ContentTemplate subModule={MAPPING.lbcgUserAna.en} />
export const LBCGTimeUseAna = () => <ContentTemplate subModule={MAPPING.lbcgTimeUseAna.en} />
export const LBChannelOrder = () => <ContentTemplate subModule={MAPPING.lbChannelOrder.en} />
export const LBChannelAna = () => <ContentTemplate subModule={MAPPING.lbChannelAna.en} />
export const LBShowsOrder = () => <ContentTemplate subModule={MAPPING.lbShowsOrder.en} />

//点播业务
export const DBUserOverview = () => <ContentTemplate subModule={MAPPING.dbUserOverview.en} />
export const DBUserBehave = () => <ContentTemplate subModule={MAPPING.dbUserBehave.en} />
export const DBResAvailAna = () => <ContentTemplate subModule={MAPPING.dbResAvailAna.en} />
export const DBShowCenterAna = () => <ContentTemplate subModule={MAPPING.dbShowCenterAna.en} />
export const DBShowTypeUserAna = () => <ContentTemplate subModule={MAPPING.dbShowTypeUserAna.en} />
export const DBShowTypeTimeUseAna = () => <ContentTemplate subModule={MAPPING.dbShowTypeTimeUseAna.en} />
export const DBMovieOrder = () => <ContentTemplate subModule={MAPPING.dbMovieOrder.en} />
export const DBTVPlayOrder = () => <ContentTemplate subModule={MAPPING.dbTVPlayOrder.en} />
