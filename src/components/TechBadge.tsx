import React, { useState } from "react";
import { Code2 } from "lucide-react";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const TECH_ICON_MAP: Array<[RegExp, string]> = [
  [/\bjava\b|jgit|javaparser/i, `${DEVICON_BASE}/java/java-original.svg`],
  [/spring/i, `${DEVICON_BASE}/spring/spring-original.svg`],
  [/angular/i, `${DEVICON_BASE}/angular/angular-original.svg`],
  [/react native|react/i, `${DEVICON_BASE}/react/react-original.svg`],
  [/next\.?js/i, `${DEVICON_BASE}/nextjs/nextjs-original.svg`],
  [/typescript/i, `${DEVICON_BASE}/typescript/typescript-original.svg`],
  [/javascript|es6/i, `${DEVICON_BASE}/javascript/javascript-original.svg`],
  [/c#|asp\.net|\.net|xunit|entity framework/i, `${DEVICON_BASE}/dotnetcore/dotnetcore-original.svg`],
  [/node\.?js|ejs/i, `${DEVICON_BASE}/nodejs/nodejs-original.svg`],
  [/express/i, `${DEVICON_BASE}/express/express-original.svg`],
  [/php|symfony/i, `${DEVICON_BASE}/symfony/symfony-original.svg`],
  [/python/i, `${DEVICON_BASE}/python/python-original.svg`],
  [/fastapi/i, `${DEVICON_BASE}/fastapi/fastapi-original.svg`],
  [/pandas/i, `${DEVICON_BASE}/pandas/pandas-original.svg`],
  [/numpy/i, `${DEVICON_BASE}/numpy/numpy-original.svg`],
  [/scikit/i, `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`],
  [/jupyter|matplotlib/i, `${DEVICON_BASE}/jupyter/jupyter-original.svg`],
  [/postgres|postgis/i, `${DEVICON_BASE}/postgresql/postgresql-original.svg`],
  [/mysql/i, `${DEVICON_BASE}/mysql/mysql-original.svg`],
  [/sql\s*server/i, `${DEVICON_BASE}/microsoftsqlserver/microsoftsqlserver-plain.svg`],
  [/sqlite/i, `${DEVICON_BASE}/sqlite/sqlite-original.svg`],
  [/redis/i, `${DEVICON_BASE}/redis/redis-original.svg`],
  [/mongodb/i, `${DEVICON_BASE}/mongodb/mongodb-original.svg`],
  [/hibernate/i, `${DEVICON_BASE}/hibernate/hibernate-original.svg`],
  [/docker/i, `${DEVICON_BASE}/docker/docker-original.svg`],
  [/kubernetes/i, `${DEVICON_BASE}/kubernetes/kubernetes-plain.svg`],
  [/gitlab/i, `${DEVICON_BASE}/gitlab/gitlab-original.svg`],
  [/jenkins/i, `${DEVICON_BASE}/jenkins/jenkins-original.svg`],
  [/ansible/i, `${DEVICON_BASE}/ansible/ansible-original.svg`],
  [/terraform/i, `${DEVICON_BASE}/terraform/terraform-original.svg`],
  [/grafana/i, `${DEVICON_BASE}/grafana/grafana-original.svg`],
  [/linux|bash/i, `${DEVICON_BASE}/linux/linux-original.svg`],
  [/nginx/i, `${DEVICON_BASE}/nginx/nginx-original.svg`],
  [/sonarqube/i, `${DEVICON_BASE}/sonarqube/sonarqube-original.svg`],
  [/git\b|github/i, `${DEVICON_BASE}/git/git-original.svg`],
  [/tauri/i, `${DEVICON_BASE}/tauri/tauri-original.svg`],
  [/electron/i, `${DEVICON_BASE}/electron/electron-original.svg`],
  [/tailwind/i, `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`],
  [/bootstrap/i, `${DEVICON_BASE}/bootstrap/bootstrap-original.svg`],
  [/html5/i, `${DEVICON_BASE}/html5/html5-original.svg`],
  [/css3/i, `${DEVICON_BASE}/css3/css3-original.svg`],
  [/aws/i, `${DEVICON_BASE}/amazonwebservices/amazonwebservices-original-wordmark.svg`],
  [/azure/i, `${DEVICON_BASE}/azure/azure-original.svg`],
  [/junit/i, `${DEVICON_BASE}/junit/junit-original.svg`],
  [/c\s*\/\s*c\+\+/i, `${DEVICON_BASE}/cplusplus/cplusplus-original.svg`],
  [/socket/i, `${DEVICON_BASE}/socketio/socketio-original.svg`],
];

function getTechIconUrl(label: string): string | null {
  for (const [re, url] of TECH_ICON_MAP) {
    if (re.test(label)) return url;
  }
  return null;
}

interface TechBadgeProps {
  label: string;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ label, className = "tech-tag" }) => {
  const [failed, setFailed] = useState(false);
  const iconUrl = getTechIconUrl(label);

  return (
    <span className={`${className} tech-with-icon`}>
      {iconUrl && !failed ? (
        <img
          src={iconUrl}
          alt=""
          aria-hidden="true"
          className="tech-icon-img"
          width={14}
          height={14}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <Code2 size={13} className="tech-icon-fallback" aria-hidden="true" />
      )}
      <span>{label}</span>
    </span>
  );
};
