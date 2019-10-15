# -*- coding: utf-8 -*-
# import requests
import time
import base64
import hashlib
from Crypto.Cipher import AES
import pdb

DESCARTES_TOKEN_EXPIRED_SECONDS = 60 * 5  # 5 minutes

PROJECT_ID = 297
PROJECT_KEY = 'MzU6OjpcKklHFEeK'


def cgi_auth_encode(project_id, project_key):
    aes_key = hashlib.md5(project_key).digest()
    print 'aes_key', aes_key
    pdb.set_trace()
    # aes_str = "descartes_token_time:%s" % int(time
    # .time())
    aes_str = "descartes_token_time:%s" % 1568806844
    aes_obj = AES.new(aes_key, AES.MODE_CBC, aes_key)
    aes_str = chr(0) * (16 - len(aes_str) % 16) + aes_str
    rt = aes_obj.encrypt(aes_str)
    sss = ("%s:::%s" % (PROJECT_ID, rt))
    print '=======', type(sss), sss
    return base64.encodestring("%s:::%s" % (project_id, rt)).replace("\n", "").replace('\r', '').replace('\t', '')


if __name__ == "__main__":
    token = cgi_auth_encode(PROJECT_ID, PROJECT_KEY)
    print 'token'
    print token

    # header = {'DESCARTES-TOKEN': token}
    # print token
    # print requests.get(
    #     'http://10.55.80.214:8081/workflow/flow_list/35/', headers=header).content
