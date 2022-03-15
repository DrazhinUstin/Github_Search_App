import React from 'react';
import ReactFC from 'react-fusioncharts-fix';
import FusionCharts from 'fusioncharts';
import Doughnut3d from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Doughnut3d, FusionTheme);

const Stars = ({ repos }) => {
    let stars = repos.reduce((result, item) => {
        const { language, stargazers_count: stars } = item;
        if (!language || !stars) return result;
        if (!result[language]) result[language] = stars;
        else result[language] += stars;
        return result;
    }, {});

    stars = Object.keys(stars).map((item) => {
        return { label: item, value: stars[item] };
    });

    const chartConfigs = {
        type: 'doughnut3d',
        width: '100%',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            chart: {
                caption: 'Stars Per Language',
                captionFont: 'Open Sans, sans-serif',
                captionFontColor: '#1a1818',
                captionFontSize: '16',
                labelFont: 'Open Sans, sans-serif',
                labelFontColor: '#1a1818',
                smartLineColor: '#9d97b0',
                legendItemFont: 'Open Sans, sans-serif',
                legendItemFontColor: '#9d97b0',
                showPercentValues: '0',
                decimals: '0',
                theme: 'fusion',
            },
            data: stars,
        },
    };

    return <ReactFC {...chartConfigs} />;
};

export default Stars;
