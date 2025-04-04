/**
 * Copyright 2024 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { FromSchema, JSONSchema } from 'json-schema-to-ts';

import { ProjectVisiblity } from '../entities/project.entity.js';

import { projectSchema } from './project.js';

export const projectCreateBodySchema = {
  type: 'object',
  additionalProperties: false,
  required: ['name'],
  properties: {
    name: { type: 'string' },
    visibility: {
      type: 'string',
      enum: Object.values(ProjectVisiblity),
      default: ProjectVisiblity.PUBLIC
    }
  }
} as const satisfies JSONSchema;
export type ProjectCreateBody = FromSchema<typeof projectCreateBodySchema>;

export const projectCreateResponseSchema = projectSchema;
export type ProjectCreateResponse = FromSchema<typeof projectCreateResponseSchema>;
