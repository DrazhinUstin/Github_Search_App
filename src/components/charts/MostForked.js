import React from 'react';
import ReactFC from 'react-fusioncharts-fix';
import FusionCharts from 'fusioncharts';
import Bar3d from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Bar3d, FusionTheme);

const MostForked = ({ repos, colors }) => {
    const mostForked = repos
        .sort((a, b) => b.forks - a.forks)
        .slice(0, 5)
        .reduce((result, item, index) => {
            if (!item.forks) return result;
            return [...result, { label: item.name, value: item.forks, color: colors[index] }];
        }, []);

    if (!mostForked.length) return null;

    const chartConfigs = {
        type: 'bar3d',
        width: '100%',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            chart: {
                xAxisName: 'Forks',
                xAxisNameFont: 'Open Sans, sans-serif',
                xAxisNameFontColor: '#9d97b0',
                xAxisNameFontSize: '16',
                xAxisNameFontBold: '1',
                yAxisName: 'Repos',
                yAxisNameFont: 'Open Sans, sans-serif',
                yAxisNameFontColor: '#9d97b0',
                yAxisNameFontSize: '16',
                yAxisNameFontBold: '1',
                yAxisValueFontSize: '12',
                caption: 'Most Forked Repos',
                captionFont: 'Open Sans, sans-serif',
                captionFontColor: '#1a1818',
                captionFontSize: '16',
                labelFont: 'Open Sans, sans-serif',
                labelFontColor: '#1a1818',
                labelFontSize: '12',
                theme: 'fusion',
            },
            data: mostForked,
        },
    };

    return <ReactFC {...chartConfigs} />;
};

export default MostForked;
