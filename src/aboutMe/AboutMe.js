
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./aboutMe.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IMAGE_ID_PATH = './img/ids/ID.jpg';

var AboutMe = function (_React$Component) {
    _inherits(AboutMe, _React$Component);

    function AboutMe() {
        _classCallCheck(this, AboutMe);

        return _possibleConstructorReturn(this, (AboutMe.__proto__ || Object.getPrototypeOf(AboutMe)).apply(this, arguments));
    }

    _createClass(AboutMe, [{
        key: 'renderIDPhoto',
        value: function renderIDPhoto() {
            return _react2.default.createElement('img', { src: IMAGE_ID_PATH, alt: 'My id', id: 'pic' });
        }
    }, {
        key: 'renderEmail',
        value: function renderEmail() {
            return _react2.default.createElement(
                'p',
                null,
                'Email:',
                _react2.default.createElement(
                    'a',
                    { className: 'email', href: 'mailto:sangzhouyang@student.unimelb.edu.au' },
                    'sangzhouyang@student.unimelb.edu.au'
                )
            );
        }
    }, {
        key: 'renderSkills',
        value: function renderSkills() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'dt',
                    null,
                    'Skills'
                ),
                _react2.default.createElement(
                    'dd',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Software engineering'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'software design, Testing'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'li',
                            null,
                            'JIRA, Git'
                        )
                    ),
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Languages and tools'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Java, C++, Android, Javascript, Ruby on rails ... '
                        )
                    ),
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Research'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Research experiences during undergraduate and master studying'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'li',
                            null,
                            'One research paper published, two software copyrights'
                        )
                    ),
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Others'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Computer graphics(e.g. 3d rendering, modeling).'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'li',
                            null,
                            'With OpenGL, DirectX, JOGL, Java3D experiences.'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Unity3D, Kinect SDK'
                        )
                    ),
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Go to my ',
                        _react2.default.createElement(
                            'a',
                            { href: 'https://github.com/YSZhuoyang', target: '_blank', rel: 'nofollow' },
                            _react2.default.createElement(
                                'font',
                                { color: 'blue' },
                                'Github'
                            )
                        ),
                        ' '
                    )
                )
            );
        }
    }, {
        key: 'renderExp',
        value: function renderExp() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'dt',
                    null,
                    'Experience'
                ),
                _react2.default.createElement(
                    'dd',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Research project ',
                        _react2.default.createElement(
                            'span',
                            null,
                            'Major participant - ZJUT, China - 2013-2014'
                        )
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Plant structure modelling using L System'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Plant physiology model: photosynthesis and assimilate partitioning'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Publication:',
                            _react2.default.createElement(
                                'a',
                                { href: 'http://www.davidpublisher.org/index.php/Home/Article/index?id=738.html' },
                                _react2.default.createElement(
                                    'font',
                                    { color: '#404040' },
                                    'A Functional-Structural Model of Rice Seedling Coupled with Nitrogen Metabolism'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Research assistance ',
                        _react2.default.createElement(
                            'span',
                            null,
                            'Developer - Microsoft Social NUI, Unimelb - 2016'
                        )
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Animating and modelling with unity and blender'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Unity scripting with C# and Kinect v2 SDK, skeleton tracking'
                        )
                    ),
                    _react2.default.createElement(
                        'h2',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: 'http://codebrew.net.au/' },
                            _react2.default.createElement(
                                'font',
                                { color: '#404040' },
                                'Codebrew hackathon 2016'
                            )
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Team: Tomatoes - Melbourne - 2016'
                        )
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Innovation in Sustainability Award'
                        )
                    ),
                    _react2.default.createElement(
                        'h2',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: 'https://hackathongoddess.wordpress.com/2016/01/07/ge-breaks-into-the-hackathon-scene-with-industry-challenges/', target: '_blank', rel: 'nofollow' },
                            _react2.default.createElement(
                                'font',
                                { color: '#404040' },
                                'GE hackathon 2015'
                            )
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Team: Pocket Rails - Melbourne - 2015'
                        )
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            '3rd prize'
                        )
                    ),
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Go to my ',
                        _react2.default.createElement(
                            'a',
                            { href: 'https://au.linkedin.com/in/yuszy', target: '_blank', rel: 'nofollow' },
                            _react2.default.createElement(
                                'font',
                                { color: 'blue' },
                                'LinkedIn'
                            )
                        ),
                        ' '
                    )
                )
            );
        }
    }, {
        key: 'renderInterests',
        value: function renderInterests() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'dt',
                    null,
                    'Interests'
                ),
                _react2.default.createElement(
                    'dd',
                    null,
                    'Car racing games'
                ),
                _react2.default.createElement(
                    'dd',
                    null,
                    'Poached eggs'
                ),
                _react2.default.createElement(
                    'dd',
                    null,
                    'Cantopop'
                ),
                _react2.default.createElement('br', null)
            );
        }
    }, {
        key: 'renderEducation',
        value: function renderEducation() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'dt',
                    null,
                    'Education'
                ),
                _react2.default.createElement(
                    'dd',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Melbourne University - Master of IT'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Major:'
                        ),
                        ' Distributed Computing ',
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Minor:'
                        ),
                        ' Software engineering'
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'about-me' },
                this.renderIDPhoto(),
                _react2.default.createElement(
                    'div',
                    { id: 'contact-info', className: 'vcard' },
                    _react2.default.createElement(
                        'h1',
                        { className: 'fn' },
                        'Oscar Yu'
                    ),
                    this.renderEmail()
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'objective' },
                    _react2.default.createElement('p', null)
                ),
                _react2.default.createElement('div', { className: 'clear' }),
                _react2.default.createElement(
                    'dl',
                    null,
                    _react2.default.createElement('dd', null),
                    _react2.default.createElement('p', null),
                    this.renderSkills(),
                    _react2.default.createElement('div', { className: 'clear' }),
                    _react2.default.createElement('p', null),
                    this.renderExp(),
                    _react2.default.createElement('div', { className: 'clear' }),
                    _react2.default.createElement('dd', null),
                    _react2.default.createElement('p', null),
                    this.renderEducation(),
                    _react2.default.createElement('dd', null),
                    _react2.default.createElement('div', { className: 'clear' }),
                    _react2.default.createElement('p', null),
                    this.renderInterests()
                )
            );
        }
    }]);

    return AboutMe;
}(_react2.default.Component);

exports.default = AboutMe;