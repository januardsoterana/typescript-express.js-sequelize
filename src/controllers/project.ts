import { Request, Response } from 'express';
import axios from 'axios';

import { ProjectInfo } from '../models/project_info';
import { ProjectLocationInfo } from '../models/project_location_info';
import config from '../config/config';

export const project_info_list = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const projects: ProjectInfo[] = await ProjectInfo.findAll();
    return res.status(200).json(projects);
};

export const project_info_by_pk = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const { id } = req.params;
    const project: ProjectInfo | null = await ProjectInfo.findByPk(id, {
        include: [{ model: ProjectLocationInfo }],
    });
    return res.status(200).json(project);
};

export const weather_info = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const { id } = req.params;
    const project: ProjectInfo | null = await ProjectInfo.findByPk(id, {
        include: [{ model: ProjectLocationInfo }],
    });
    const lat = project.location.latitude;
    const lon = project.location.longitude;
    const current_forecast = await axios.get(
        `${config.openweathermap.base_url}/weather`,
        {
            params: {
                lat,
                lon,
                appid: config.openweathermap.api_key,
                units: 'metric',
            },
        },
    );
    const data = current_forecast.data;
    const current_weather = {
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        temp: data.main.temp,
        wind: data.wind.speed,
    };
    const daily_forecast = await axios.get(
        `${config.openweathermap.base_url}/forecast`,
        {
            params: {
                lat,
                lon,
                appid: config.openweathermap.api_key,
                units: 'metric',
            },
        },
    );
    const daily_weather = daily_forecast.data.list.map((item) => {
        return {
            dt: item.dt,
            dt_txt: item.dt_txt,
            temp_max: item.main.temp_max,
            temp_min: item.main.temp_min,
            icon: item.weather[0].icon,
        };
    });
    return res.status(200).json({
        project: project,
        current: current_weather,
        daily: daily_weather,
    });
};
