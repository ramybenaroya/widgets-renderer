/**
 * Copyright 2014 Atlassian
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @jsx React.DOM
 */

// This file bootstraps the entire application.
// Empty for now!

var Renderer = require('./components/Renderer');
var LocalStorageFixtures = require('./services/LocalStorageFixtures');
var React = require('react');
var RendererViewActionCreators = require('./actions/RendererViewActionCreators');

LocalStorageFixtures.init();

RendererViewActionCreators.requestRendererData();

React.render(
  <Renderer />,
  document.getElementById('insite-outsite-container-renderer')
);