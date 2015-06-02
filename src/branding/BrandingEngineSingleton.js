/**
 * Created by tom on 20/05/15.
 */

import {BrandingEngine}         from './BrandingEngine';
import {Context}                from '../Context';

export class BrandingEngineSingleton {
    /**
     * Get a singleton global instance of the BrandingEngine.
     * @returns {BrandingEngine}
     */
    static getInstance(){
        return Context.getContext('Default').get(BrandingEngine);
    }
}
