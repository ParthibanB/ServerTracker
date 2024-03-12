import React, { useEffect } from 'react';
import { serverConstants } from '../constants/userConstants';
import { serverService } from '../services/server.service';
import { alertConstants } from '../constants/alterConstats';
import { alertService } from './AlterActions';
import { ServerModel } from "../helpers/ServerModel";

type Props = {};
export const serverActions = {
    addServer
  };

  async function addServer(registerServer: any) {
    var responseData = await serverService.addServer(registerServer);
    if(responseData.statusCode === 200){
   
      return responseData
    }
    else {
      return responseData.statusCode;
    }
  };