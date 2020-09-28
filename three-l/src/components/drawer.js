import * as THREE from 'three';
import {
  OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js';
import {
  SceneUtils
} from 'three/examples/jsm/utils/SceneUtils.js';

import { MeshLine, MeshLineMaterial } from 'threejs-meshline'

export class Drawer {

  constructor(dom) {
    this.init(dom);
    this.addEarth();
    this.addLine();
    this.addLight();
    this.addGalaxy();
    this.addControls();
    this.showAxes();
    this.render();
  }

  init(dom) {
    this.options = {
      earthBallSize: 30,
      dotWidth: 0.5,
      metapNum: 150,
      markingNum: 50,
      metapLineColor: 'rgb(27, 180, 176)',
      slideBallColor: 'rgb(27, 180, 176)'
    };

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.x = 40;
    this.camera.position.y = 60;
    this.camera.position.z = 90;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.webGLRenderer = new THREE.WebGLRenderer();
    this.webGLRenderer.setClearColor(0x000, 1.0);
    this.webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById(dom).appendChild(this.webGLRenderer.domElement);

    this.textureLoader = new THREE.TextureLoader();
  }

  addEarth() {
    const sphere = this.createMesh(new THREE.SphereGeometry(this.options.earthBallSize, 50, 50));

    this.sphere = sphere;
    this.scene.add(sphere);
  }

  createMesh(geom) {
    const textureLoader = this.textureLoader;
    const map = textureLoader.load(require('../assets/textures/planets/Earth.png'));
    const bumpMap = textureLoader.load(require('../assets/textures/planets/earthbump1k.jpg'));
    const specularMap = textureLoader.load(require('../assets/textures/planets/EarthSpec.png'));

    const material = new THREE.MeshPhongMaterial({
      bumpScale: 0.05,
      specular: new THREE.Color('grey'),
      shininess: 10
    });

    material.map = map;
    material.bumpMap = bumpMap;
    material.specularMap = specularMap;

    return new THREE.Mesh(geom, material);;
  }

  addLight() {
    // const ambi = new THREE.AmbientLight('#aaaaaa');
    // this.scene.add(ambi);

    const spotLight = new THREE.SpotLight(0xffffff, 1, 0, 10, 2);
    spotLight.position.set(350, 350, 150);
    spotLight.intensity = 0.3;
    this.scene.add(spotLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);
    hemiLight.position.set(10, 0, 0);
    this.scene.add(hemiLight);
  }

  addGalaxy() {
    const galaxyGeometry = new THREE.SphereGeometry(100, 32, 32);
    const galaxyMaterial = new THREE.MeshBasicMaterial({
      side: THREE.BackSide
    });
    const galaxy = new THREE.Mesh(galaxyGeometry, galaxyMaterial);

    galaxyMaterial.map = this.textureLoader.load(require('../assets/textures/planets/starfield.png'));
    this.scene.add(galaxy);
  }

  addLine() {
    var vm = this;
    var markingPos = {
      "marking": [
          {
          "textValue": "中国首都-北京",
            "fontColor": "#c6aa0e",
            "fontSize": 14,
            "pos": [116.4551,40.1439]
        },
        {
          "textValue": "俄罗斯首都-莫斯科",
            "fontColor": "#86a519",
            "fontSize": 14,
            "pos": [37.35,55.45]
        },
        {
          "textValue": "美国首都-华盛顿",
            "fontColor": "#05a914",
            "fontSize": 14,
            "pos": [-77.02182,38.53707]
        },
        {
          "textValue": "澳大利亚首都-堪培拉",
            "fontColor": "#05a914",
            "fontSize": 14,
            "pos": [149.07,-35.17]
        },
        {
          "textValue": "巴西首都-巴西利亚",
            "fontColor": "#af0da9",
            "fontSize": 14,
            "pos": [-47.56,-15.47]
        },
        {
          "textValue": "南非首都-开普敦",
            "fontColor": "#047f4f",
            "fontSize": 14,
            "pos": [18,-34]
        },
        {
          "textValue": "英国首都-伦敦",
            "fontColor": "#ffffff",
            "fontSize": 14,
            "pos": [0.5, 51.3]
        },
        {
          "textValue": "日本首都-东京",
            "fontColor": "#ffffff",
            "fontSize": 14,
            "pos": [139.6932, 35.6898]
        },
        {
          "textValue": "韩国首都-首尔",
            "fontColor": "#ffffff",
            "fontSize": 14,
            "pos": [126.58, 37.38]
        },
        {
          "textValue": "印度首都-新德里",
            "fontColor": "#ffffff",
            "fontSize": 14,
            "pos": [77.13, 28.37]
        },
        {
          "textValue": "泰国首都-曼谷",
            "fontColor": "#ffffff",
            "fontSize": 14,
            "pos": [100.31, 13.45]
        },
        {
          "textValue": "法国首都-巴黎",
            "fontColor": "#ffffff",
            "fontSize": 14,
            "pos": [2.174203, 48.522552]
        },
        {
          "textValue": "埃及首都-开罗",
            "fontColor": "#ffffff",
            "fontSize": 14,
            "pos": [31, 30]
        },
        {
          "textValue": "新西兰首都-惠灵顿",
            "fontColor": "#ffffff",
            "fontSize": 14,
            "pos": [176.463425, -41.171228]
        },
        {
          "textValue": "加拿大首都-渥太华",
            "fontColor": "#ffffff",
            "fontSize": 14,
            "pos": [-75.43, 45.25]
        }
      ]
    };
    
    var marking = new THREE.Group();
    // 将标记点添加到地球上
    markingPos.marking.forEach(function (markingItem) {
      // 创建标记点球体
      var ball = new THREE.Mesh(new THREE.SphereGeometry(vm.options.dotWidth, 30, 30), new THREE.MeshBasicMaterial({
        color: '#6d1e1e'
      }));
      // 获取标记点坐标
      var ballPos = vm.getPosition(markingItem.pos[0] + 90, markingItem.pos[1], vm.options.earthBallSize);
      ball.position.set(ballPos.x, ballPos.y, ballPos.z);
      marking.add(ball);
    })
    this.scene.add(marking);

    var animateDots = [];
    // 线条对象集合
    var groupLines = new THREE.Group();
    // 线条
    marking.children.forEach(function (item) {
      var line = vm.drawLine(marking.children[0].position, item.position);
      groupLines.add(line.lineMesh);
      animateDots.push(line.curve.getPoints(150));
    })
    this.scene.add(groupLines);
    // 线上滑动的小球
    var aGroup = new THREE.Group();
    for (var i = 0; i < animateDots.length; i++) {
      for (var j = 0; j < 50; j++) {
        var aGeo = new THREE.SphereGeometry(this.options.dotWidth / 2, 10, 10);
        var aMaterial = new THREE.MeshBasicMaterial({
          color: this.options.slideBallColor,
          transparent: true,
          opacity: 1 - j * 0.02
        })
        var aMesh = new THREE.Mesh(aGeo, aMaterial);
        aGroup.add(aMesh);
      }
    }
    var vIndex = 0;
    var firstBool = true;

    function animationLine() {
      aGroup.children.forEach(function (elem, index) {
        var _index = parseInt(index / 50);
        var index2 = index - 50 * _index;
        var _vIndex = 0;
        if (firstBool) {
          _vIndex = vIndex - index2 % 50 >= 0 ? vIndex - index2 % 50 : 0;
        } else {
          _vIndex = vIndex - index2 % 50 >= 0 ? vIndex - index2 % 50 : 150 + vIndex - index2;
        }
        var v = animateDots[_index][_vIndex];
        elem.position.set(v.x, v.y, v.z);
      })
      vIndex++;
      if (vIndex > 150) {
        vIndex = 0;
      }
      if (vIndex == 150 && firstBool) {
        firstBool = false;
      }
      requestAnimationFrame(animationLine);
    }
    this.scene.add(aGroup);
    animationLine();
  }

  drawLine(v0, v3) {
    var angle = (v0.angleTo(v3) * 180) / Math.PI;
    var aLen = angle * 0.5 * (1 - angle / (Math.PI * 90));
    var hLen = angle * angle * 1.2 * (1 - angle / (Math.PI * 90));
    var p0 = new THREE.Vector3(0, 0, 0);
    // 法线向量
    var rayLine = new THREE.Ray(p0, this.getVCenter(v0.clone(), v3.clone()));
    // 顶点坐标
    var vtop = new THREE.Vector3(0,0,0);
    rayLine.at(hLen / rayLine.at(1, new THREE.Vector3(0,0,0)).distanceTo(p0), vtop);

    // 控制点坐标
    var v1 = this.getLenVcetor(v0.clone(), vtop, aLen);
    var v2 = this.getLenVcetor(v3.clone(), vtop, aLen);
    // 绘制贝塞尔曲线
    var curve = new THREE.CubicBezierCurve3(v0, v1, v2, v3);
    var geometry = new THREE.Geometry();
    geometry.vertices = curve.getPoints(100);
    var line = new MeshLine();
    line.setGeometry(geometry);
    var material = new MeshLineMaterial({
      color: this.options.metapLineColor,
      lineWidth: 0.1,
      transparent: true,
      opacity: 1
    })
    return {
      curve: curve,
      lineMesh: new THREE.Mesh(line.geometry, material)
    }
  }

  getPosition(longitude, latitude, radius) {
    // 将经度，纬度转换为rad坐标
    var lg = THREE.Math.degToRad(longitude);
    var lt = THREE.Math.degToRad(latitude);
    var temp = radius * Math.cos(lt);
    // 获取x，y，z坐标
    var x = temp * Math.sin(lg);
    var y = radius * Math.sin(lt);
    var z = temp * Math.cos(lg);
    return {
      x: x,
      y: y,
      z: z
    }
  }

  getVCenter (v1, v2) {
    var v = v1.add(v2);
    return v.divideScalar(2);
  }

  getLenVcetor (v1, v2, len) {
    var v1v2Len = v1.distanceTo(v2);
    return v1.lerp(v2, len / v1v2Len);
  }

  addControls() {
    this.orbitControls = new OrbitControls(this.camera, this.webGLRenderer.domElement);
    this.orbitControls.autoRotate = false;

    this.clock = new THREE.Clock();
  }

  showAxes() {
    var axes = new THREE.AxesHelper(300);
    this.scene.add(axes);
  }

  render() {
    var delta = this.clock.getDelta();
    this.orbitControls.update(delta);

    this.scene.rotation.y += 0.005;
    // this.sphere.rotation.y += 0.002;

    requestAnimationFrame(this.render.bind(this));
    this.webGLRenderer.render(this.scene, this.camera);
  }
}