export class EdgeKV {
    /**
     * Constructor to allow setting default namespace and group
     * These defaults can be overridden when making individual GET, PUT, and DELETE operations
     *
     * @typedef {Object} Opts
     * @property {string} [namespace="default"] the default namespace to use for all GET, PUT, and DELETE operations
     * 		Namespace must be 32 characters or less, consisting of A-Z a-z 0-9 _ or -
     * @property {string} [group="default"] the default group to use for all GET, PUT, and DELETE operations
     * 		Group must be 128 characters or less, consisting of A-Z a-z 0-9 _ or -
     * @property {object} [edgekv_access_tokens={}] token name and token value for each namespace
     * @property {number} [num_retries_on_timeout=0] the number of times to retry a GET requests when the sub request times out
     * @property {object} [ew_request=null] passes the request object from the EdgeWorkers event handler to enable access to EdgeKV data in sandbox environments
     * @property {boolean} [sandbox_fallback=false] whether to fallback to retrieving staging data if the sandbox data does not exist, instead of returning null or the specified default value
     *
     * @param {Opts|string} [namespace="default"] the default namespace to use for all GET, PUT, and DELETE operations
     * @param {string} [group="default"] the default group to use for all GET, PUT, and DELETE operations
     * 		Group must be 128 characters or less, consisting of A-Z a-z 0-9 _ or -
     */
    constructor(namespace?: {
        /**
         * the default namespace to use for all GET, PUT, and DELETE operations
         * Namespace must be 32 characters or less, consisting of A-Z a-z 0-9 _ or -
         */
        namespace?: string;
        /**
         * the default group to use for all GET, PUT, and DELETE operations
         * Group must be 128 characters or less, consisting of A-Z a-z 0-9 _ or -
         */
        group?: string;
        /**
         * token name and token value for each namespace
         */
        edgekv_access_tokens?: object;
        /**
         * the number of times to retry a GET requests when the sub request times out
         */
        num_retries_on_timeout?: number;
        /**
         * passes the request object from the EdgeWorkers event handler to enable access to EdgeKV data in sandbox environments
         */
        ew_request?: object;
        /**
         * whether to fallback to retrieving staging data if the sandbox data does not exist, instead of returning null or the specified default value
         */
        sandbox_fallback?: boolean;
    } | string, group?: string, edgekv_access_tokens?: {});
    /**
     * if EdgeKV operation was not successful, an object describing the non-200 response
     * @typedef {Object} EdgeKVError
     * @property {string} failed - Failure reason.
     * @property {number} status - HTTP status code.
     * @property {*} body - Response body.
     */
    throwError(failed_reason: any, status: any, body: any): void;
    requestHandlerTemplate(http_request: any, handler_200: any, handler_large_200: any, error_text: any, default_value: any, num_retries_on_timeout: any): any;
    validate({ namespace, group, item }: {
        namespace?: any;
        group?: any;
        item?: any;
    }): void;
    getNamespaceToken(namespace: any): any;
    addTimeout(options: any, timeout: any): any;
    addSandboxId(uri: any): any;
    streamText(response_body: any): Promise<string>;
    streamJson(response_body: any): Promise<any>;
    putRequest(args: any): any;
    /**
     * async PUT text into an item in the EdgeKV.
     * @param {Object} $0
     * @param {string} [$0.namespace=this.#namespace] specify a namespace other than the default
     * @param {string} [$0.group=this.#group] specify a group other than the default
     * @param {string} $0.item item key to put into the EdgeKV
     * @param {string} $0.value text value to put into the EdgeKV
     * @param {number?} [$0.timeout=null] the maximum time, between 1 and 1000 milliseconds, to wait for the response
     * @returns {Promise<string>} if the operation was successful, the response from the EdgeKV
     * @throws {EdgeKVError} if the operation was not successful,
     * 		an object describing the non-200 response from the EdgeKV: {failed, status, body}
     */
    putText(args: any): Promise<string>;
    /**
     * PUT text into an item in the EdgeKV while only waiting for the request to send and not for the response.
     * @param {Object} $0
     * @param {string} [$0.namespace=this.#namespace] specify a namespace other than the default
     * @param {string} [$0.group=this.#group] specify a group other than the default
     * @param {string} $0.item item key to put into the EdgeKV
     * @param {string} $0.value text value to put into the EdgeKV
     * @throws {EdgeKVError} if the operation was not successful at sending the request,
     * 		an object describing the error: {failed, status, body}
     */
    putTextNoWait(args: any): void;
    /**
     * async PUT json into an item in the EdgeKV.
     * @param {Object} $0
     * @param {string} [$0.namespace=this.#namespace] specify a namespace other than the default
     * @param {string} [$0.group=this.#group] specify a group other than the default
     * @param {string} $0.item item key to put into the EdgeKV
     * @param {Object} $0.value json value to put into the EdgeKV
     * @param {number?} [$0.timeout=null] the maximum time, between 1 and 1000 milliseconds, to wait for the response
     * @returns {Promise<string>} if the operation was successful, the response from the EdgeKV
     * @throws {EdgeKVError} if the operation was not successful,
     * 		an object describing the non-200 response from the EdgeKV: {failed, status, body}
     */
    putJson(args: any): Promise<string>;
    /**
     * PUT json into an item in the EdgeKV while only waiting for the request to send and not for the response.
     * @param {Object} $0
     * @param {string} [$0.namespace=this.#namespace] specify a namespace other than the default
     * @param {string} [$0.group=this.#group] specify a group other than the default
     * @param {string} $0.item item key to put into the EdgeKV
     * @param {object} $0.value json value to put into the EdgeKV
     * @throws {EdgeKVError} if the operation was not successful at sending the request,
     * 		an object describing the error: {failed, status, body}
     */
    putJsonNoWait(args: any): void;
    getRequest(args: any): any;
    /**
     * async GET text from an item in the EdgeKV.
     * @param {Object} $0
     * @param {string} [$0.namespace=this.#namespace] specify a namespace other than the default
     * @param {string} [$0.group=this.#group] specify a group other than the default
     * @param {string} $0.item item key to get from the EdgeKV
     * @param {string?} [$0.default_value=null] the default value to return if a 404 response is returned from EdgeKV
     * @param {number?} [$0.timeout=null] the maximum time, between 1 and 1000 milliseconds, to wait for the response
     * @param {number?} [$0.num_retries_on_timeout=null] the number of times to retry a requests when the sub request times out
     * @returns {Promise<string>} if the operation was successful, the text response from the EdgeKV or the default_value on 404
     * @throws {EdgeKVError} if the operation was not successful,
     * 		an object describing the non-200 and non-404 response from the EdgeKV: {failed, status, body}
     */
    getText(args: any): Promise<string>;
    /**
     * async GET json from an item in the EdgeKV.
     * @param {Object} $0
     * @param {string} [$0.namespace=this.#namespace] specify a namespace other than the default
     * @param {string} [$0.group=this.#group] specify a group other than the default
     * @param {string} $0.item item key to get from the EdgeKV
     * @param {Object} [$0.default_value=null] the default value to return if a 404 response is returned from EdgeKV
     * @param {number?} [$0.timeout=null] the maximum time, between 1 and 1000 milliseconds, to wait for the response
     * @param {number?} [$0.num_retries_on_timeout=null] the number of times to retry a requests when the sub request times out
     * @returns {Promise<Object>} if the operation was successful, the json response from the EdgeKV or the default_value on 404
     * @throws {EdgeKVError} if the operation was not successful,
     * 		an object describing the non-200 and non-404 response from the EdgeKV: {failed, status, body}
     */
    getJson(args: any): Promise<any>;
    deleteRequest(args: any): any;
    /**
     * async DELETE an item in the EdgeKV.
     * @param {Object} $0
     * @param {string} [$0.namespace=this.#namespace] specify a namespace other than the default
     * @param {string} [$0.group=this.#group] specify a group other than the default
     * @param {string} $0.item item key to delete from the EdgeKV
     * @param {number?} [$0.timeout=null] the maximum time, between 1 and 1000 milliseconds, to wait for the response
     * @returns {Promise<string>} if the operation was successful, the text response from the EdgeKV
     * @throws {EdgeKVError} if the operation was not successful,
     * 		an object describing the non-200 response from the EdgeKV: {failed, status, body}
     */
    delete(args: any): Promise<string>;
    /**
     * DELETE an item in the EdgeKV while only waiting for the request to send and not for the response.
     * @param {Object} $0
     * @param {string} [$0.namespace=this.#namespace] specify a namespace other than the default
     * @param {string} [$0.group=this.#group] specify a group other than the default
     * @param {string} $0.item item key to delete from the EdgeKV
     * @throws {EdgeKVError} if the operation was not successful at sending the request,
     * 		an object describing the error: {failed, status, body}
     */
    deleteNoWait(args: any): void;
    #private;
}
