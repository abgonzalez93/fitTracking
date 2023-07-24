import Joi from 'joi';
import { getUserMessages } from '@config/i18n/messages'

const msg = getUserMessages.validation.profileImageValidation;

export const profileImageValidation = Joi.string().optional();