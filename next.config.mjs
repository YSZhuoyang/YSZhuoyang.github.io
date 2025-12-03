import { PHASE_PRODUCTION_BUILD } from 'next/constants.js';

/**
 * @param {string} phase
 * @returns {Promise<import('next').NextConfig>}
 */
export default async (phase) => {
    const repo = 'YSZhuoyang.github.io';
    const isProd = phase === PHASE_PRODUCTION_BUILD;

    const assetPrefix = isProd ? `/${repo}/` : undefined;
    const basePath = isProd ? `/${repo}` : undefined;

    /** @type {import('next').NextConfig} */
    const nextConfig = {
        output: 'export',
        distDir: 'build',
        assetPrefix: assetPrefix,
        basePath: basePath,
    };

    return nextConfig;
};
