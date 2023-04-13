/*-
 *
 * Hedera Hardhat Example Project
 *
 * Copyright (C) 2023 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

const { ethers } = require("hardhat");

export async function deployBlackPass() {
    let wallet = (await ethers.getSigners())[0];

    const BlackPass = await ethers.getContractFactory("BlackPass", wallet);
    const blackPass = await BlackPass.deploy("baseURI");
    const blackPassAddress = (await blackPass.deployTransaction.wait())
        .contractAddress;

    return blackPassAddress;
}