const DIRECTIVE_NAME = OnClick.DIRECTIVE_NAME = 'onClick';

export default function OnClick($parse) {
    return {
        restrict: 'A',
        link: function (scope, el, attrs) {
            const parsedFn = $parse(attrs[DIRECTIVE_NAME]);
            el.on('click', ($event) => {
                scope.$apply(() => parsedFn(scope, {$event}));
            });
        }
    }
}
