import React from 'react';
import ReactFC from 'react-fusioncharts-fix';
import FusionCharts from 'fusioncharts';
import Pie3d from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Pie3d, FusionTheme);

const Languages = ({ repos }) => {
    let languages = repos.reduce((result, item) => {
        const { language } = item;
        if (!language) return result;
        if (!result[language]) result[language] = 1;
        else result[language]++;
        return result;
    }, {});

    languages = Object.keys(languages).map((item) => {
        return { label: item, value: languages[item] };
    });

    const chartConfigs = {
        type: 'pie3d',
        width: '100%',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            chart: {
                caption: 'Languages',
                captionFont: 'Open Sans, sans-serif',
                captionFontColor: '#1a1818',
                captionFontSize: '16',
                labelFont: 'Open Sans, sans-serif',
                labelFontColor: '#1a1818',
                smartLineColor: '#9d97b0',
                legendItemFont: 'Open Sans, sans-serif',
                legendItemFontColor: '#9d97b0',
                showPercentValues: '1',
                decimals: '0',
                theme: 'fusion',
            },
            data: languages,
        },
    };

    return <ReactFC {...chartConfigs} />;
};

export default Languages;
