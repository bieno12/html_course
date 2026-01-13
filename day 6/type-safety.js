
/**
 * @param {any} value
 * @param {string} type
 */
function assertType(value, type)
{
    if (typeof value != type)
        throw new Error("Invalid Type: " + typeof value + ", expected: " + type);
}
function assertTypeOrDefault(value, type, defaultValue)
{
    if(value == undefined)
        return defaultValue;
    if (typeof value != type)
        throw new Error("Invalid Type: " + typeof value + ", expected: " + type);
}
function assertNumber(value)
{

    if(isNaN(value))
        throw new Error("Expected a number");
}
function assertNumberOrDefault(value, defaultValue)
{
    if(value == undefined)
            return defaultValue;
    if(isNaN(value))
        throw new Error("Expected a number");
}
function assertNoArguments(arguments, expectedNo)
{
    if(arguments.length != expectedNo)
        throw new Error(`Expected ${expectedNo} arguments`);
}


/**
 * @param {any} instance
 * @param {function} classConstructor
 */
function assertClass(instance, classConstructor)
{
    if(!(instance instanceof classConstructor))
        throw new Error("must be an instance of " + classConstructor.name);
}