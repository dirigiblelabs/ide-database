/*
 * Copyright (c) 2010-2022 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */
const perspectiveData = {
	id: "database",
	name: "Database",
	link: "../ide-database/index.html",
	order: "110",
	image: "database", // deprecated
	icon: "../ide-database/images/database.svg",
};
if (typeof exports !== 'undefined') {
	exports.getPerspective = function () {
		return perspectiveData;
	}
}