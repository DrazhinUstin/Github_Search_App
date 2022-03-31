import React from 'react';
import ReactFC from 'react-fusioncharts-fix';
import FusionCharts from 'fusioncharts';
import Column3d from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column3d, FusionTheme);

const MostPopular = ({ repos, colors }) => {
    const mostPopular = repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5)
        .reduce((result, item, index) => {
            if (!item.stargazers_count) return result;
            return [
                ...result,
                { label: item.name, value: item.stargazers_count, color: colors[index] },
            ];
        }, []);

    if (!mostPopular.length) return null;

    const chartConfigs = {
        type: 'column3d',
        width: '100%',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            chart: {
                xAxisName: 'Repos',
                xAxisNameFont: 'Open Sans, sans-serif',
                xAxisNameFontColor: '#9d97b0',
                xAxisNameFontSize: '16',
                xAxisNameFontBold: '1',
                yAxisName: 'Stars',
                yAxisNameFont: 'Open Sans, sans-serif',
                yAxisNameFontColor: '#9d97b0',
                yAxisNameFontSize: '16',
                yAxisNameFontBold: '1',
                yAxisValueFontSize: '12',
                caption: 'Most Popular Repos',
                captionFont: 'Open Sans, sans-serif',
                captionFontColor: '#1a1818',
                captionFontSize: '16',
                labelFont: 'Open Sans, sans-serif',
                labelFontColor: '#1a1818',
                labelFontSize: '12',
                theme: 'fusion',
            },
            data: mostPopular,
        },
    };

    return <ReactFC {...chartConfigs} />;
};

export default MostPopular;
