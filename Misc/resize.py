import cv2
import os

for (root,dirs,files) in os.walk("/home/rayuga/Downloads/256x256"):
    for f in files:
        img=cv2.imread(root+'/'+f)
        img=cv2.resize(img,(280,263))
        cv2.imwrite(os.path.join("/home/rayuga/.config/neofetch/",f),img)
        