// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

interface CloudSQLConnectorErrorOptions {
  code: string;
  errors?: Error[];
  message: string;
}

export class CloudSQLConnectorError extends Error {
  public readonly code: string;
  public readonly errors: Error[] = [];
  public readonly message: string;
  public readonly name = 'CloudSQLConnectorError';

  constructor({code, errors = [], message}: CloudSQLConnectorErrorOptions) {
    super(message);
    this.code = code;
    this.message = message;

    for (const err of errors) {
      this.errors.push(err);
    }
  }
}
